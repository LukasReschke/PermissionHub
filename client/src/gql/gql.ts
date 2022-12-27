/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "mutation AddNewPermissionDomain($data:CreatePermissionDomainInput!) {\n    createPermissionDomain(input:$data) {\n      permissionDomain {\n        id\n        name\n      }\n    }\n}": types.AddNewPermissionDomainDocument,
    "\nquery FetchAllPermissionDomains {\n    permissionDomains {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n": types.FetchAllPermissionDomainsDocument,
    "\nmutation DeletePermissionDomainByIdMutation($id: ID!) {\n    deletePermissionDomainById(input: {id: $id}) {\n      permissionDomain {\n        __typename\n        id\n      }\n    }\n  }\n": types.DeletePermissionDomainByIdMutationDocument,
    "query FetchPermissionDomainInfosById($id: ID!) {\n    node(id: $id) {\n      ... on PermissionDomain {\n        name\n        permissions {\n          nodes {\n            name\n          }\n        }\n      }\n    }\n  }\n": types.FetchPermissionDomainInfosByIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddNewPermissionDomain($data:CreatePermissionDomainInput!) {\n    createPermissionDomain(input:$data) {\n      permissionDomain {\n        id\n        name\n      }\n    }\n}"): (typeof documents)["mutation AddNewPermissionDomain($data:CreatePermissionDomainInput!) {\n    createPermissionDomain(input:$data) {\n      permissionDomain {\n        id\n        name\n      }\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery FetchAllPermissionDomains {\n    permissionDomains {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\nquery FetchAllPermissionDomains {\n    permissionDomains {\n      nodes {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation DeletePermissionDomainByIdMutation($id: ID!) {\n    deletePermissionDomainById(input: {id: $id}) {\n      permissionDomain {\n        __typename\n        id\n      }\n    }\n  }\n"): (typeof documents)["\nmutation DeletePermissionDomainByIdMutation($id: ID!) {\n    deletePermissionDomainById(input: {id: $id}) {\n      permissionDomain {\n        __typename\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query FetchPermissionDomainInfosById($id: ID!) {\n    node(id: $id) {\n      ... on PermissionDomain {\n        name\n        permissions {\n          nodes {\n            name\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["query FetchPermissionDomainInfosById($id: ID!) {\n    node(id: $id) {\n      ... on PermissionDomain {\n        name\n        permissions {\n          nodes {\n            name\n          }\n        }\n      }\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;