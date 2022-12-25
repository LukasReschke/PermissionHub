import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider, createClient, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { GraphCacheConfig } from './gql/graphql';
import { PermissionDomainsQuery } from './pages/Manage/PermissionDomains/PermissionDomainsPage';
import schema from './generated-introspection'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = createClient({
  url: 'http://localhost:3001/graphql',
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
            deletePermissionDomainById(_result, args, cache, _info) {
              const id = _result.deletePermissionDomainById?.permissionDomain?.id;
              const typeName = _result.deletePermissionDomainById?.permissionDomain?.__typename;

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
    <BrowserRouter>
      <Provider value={client}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
