import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { Provider, createClient, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { GraphCacheConfig } from './gql/graphql';
import { PermissionDomainsQuery } from './pages/Manage/PermissionDomains/PermissionDomainsPage';
import schema from './generated-introspection'
import { router } from './Router';
import { PermissionDomainQuery } from './pages/Manage/PermissionDomains/Permissions/PermissionsByDomainListPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = createClient({
  url: process.env.REACT_APP_GRAPHQL_ENDPOINT!,
  exchanges: [
    dedupExchange,
    cacheExchange<GraphCacheConfig>(
      {
        schema: schema,
        resolvers: {},
        updates: {
          Mutation: {
            createPermissionDomain(_result, args, cache, _info) {
              cache.updateQuery({ query: PermissionDomainsQuery }, data => {
                const newPermissionDomain = _result.createPermissionDomain?.permissionDomain;
                if (newPermissionDomain !== null && newPermissionDomain !== undefined) {
                  data?.permissionDomains?.nodes.push(newPermissionDomain);
                }
                return data;
              });
            },
            createPermission(_result, args, cache, _info) {
              cache.updateQuery({ query: PermissionDomainQuery, variables: { id: args.input.permission.permissionDomainId } }, data => {
                const newPermission = _result.createPermission?.permission;
                if (newPermission !== null && newPermission !== undefined) {
                  data?.permissionDomain?.permissions?.nodes.push(newPermission);
                }
                return data;
              });
            },
            deletePermissionDomain(_result, args, cache, _info) {
              const id = _result.deletePermissionDomain?.permissionDomain?.id;
              const typeName = _result.deletePermissionDomain?.permissionDomain?.__typename;

              if (id !== undefined && typeName !== undefined) {
                cache.invalidate({
                  __typename: typeName,
                  id: id
                });
              }
            },
          },
        },
      }),
    fetchExchange
  ],
});

root.render(
  <React.StrictMode>
    <Provider value={client}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
