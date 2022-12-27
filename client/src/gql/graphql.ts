/* eslint-disable */
import { Resolver as GraphCacheResolver, UpdateResolver as GraphCacheUpdateResolver, OptimisticMutationResolver as GraphCacheOptimisticMutationResolver, StorageAdapter as GraphCacheStorageAdapter } from '@urql/exchange-graphcache';
import { IntrospectionData } from '@urql/exchange-graphcache/dist/types/ast';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
};

/** All input for the create `PermissionDomain` mutation. */
export type CreatePermissionDomainInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `PermissionDomain` to be created by this mutation. */
  permissionDomain: PermissionDomainInput;
};

/** The output of our create `PermissionDomain` mutation. */
export type CreatePermissionDomainPayload = {
  __typename?: 'CreatePermissionDomainPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `PermissionDomain` that was created by this mutation. */
  permissionDomain?: Maybe<PermissionDomain>;
  /** An edge for our `PermissionDomain`. May be used by Relay 1. */
  permissionDomainEdge?: Maybe<PermissionDomainsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `PermissionDomain` mutation. */
export type CreatePermissionDomainPayloadPermissionDomainEdgeArgs = {
  orderBy?: InputMaybe<Array<PermissionDomainsOrderBy>>;
};

/** All input for the create `Permission` mutation. */
export type CreatePermissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Permission` to be created by this mutation. */
  permission: PermissionInput;
};

/** The output of our create `Permission` mutation. */
export type CreatePermissionPayload = {
  __typename?: 'CreatePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Permission` that was created by this mutation. */
  permission?: Maybe<Permission>;
  /** Reads a single `PermissionDomain` that is related to this `Permission`. */
  permissionDomain?: Maybe<PermissionDomain>;
  /** An edge for our `Permission`. May be used by Relay 1. */
  permissionEdge?: Maybe<PermissionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Permission` mutation. */
export type CreatePermissionPayloadPermissionEdgeArgs = {
  orderBy?: InputMaybe<Array<PermissionsOrderBy>>;
};

/** All input for the `deletePermissionByName` mutation. */
export type DeletePermissionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Unique name for a permission inside a permission domain */
  name: Scalars['String'];
};

/** All input for the `deletePermissionByNodeId` mutation. */
export type DeletePermissionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Permission` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deletePermissionDomainByName` mutation. */
export type DeletePermissionDomainByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Unique name of the permission domain */
  name: Scalars['String'];
};

/** All input for the `deletePermissionDomainByNodeId` mutation. */
export type DeletePermissionDomainByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `PermissionDomain` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deletePermissionDomain` mutation. */
export type DeletePermissionDomainInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Unique ID of the permission domain */
  id: Scalars['Int'];
};

/** The output of our delete `PermissionDomain` mutation. */
export type DeletePermissionDomainPayload = {
  __typename?: 'DeletePermissionDomainPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPermissionDomainNodeId?: Maybe<Scalars['ID']>;
  /** The `PermissionDomain` that was deleted by this mutation. */
  permissionDomain?: Maybe<PermissionDomain>;
  /** An edge for our `PermissionDomain`. May be used by Relay 1. */
  permissionDomainEdge?: Maybe<PermissionDomainsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `PermissionDomain` mutation. */
export type DeletePermissionDomainPayloadPermissionDomainEdgeArgs = {
  orderBy?: InputMaybe<Array<PermissionDomainsOrderBy>>;
};

/** All input for the `deletePermission` mutation. */
export type DeletePermissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** The output of our delete `Permission` mutation. */
export type DeletePermissionPayload = {
  __typename?: 'DeletePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPermissionNodeId?: Maybe<Scalars['ID']>;
  /** The `Permission` that was deleted by this mutation. */
  permission?: Maybe<Permission>;
  /** Reads a single `PermissionDomain` that is related to this `Permission`. */
  permissionDomain?: Maybe<PermissionDomain>;
  /** An edge for our `Permission`. May be used by Relay 1. */
  permissionEdge?: Maybe<PermissionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Permission` mutation. */
export type DeletePermissionPayloadPermissionEdgeArgs = {
  orderBy?: InputMaybe<Array<PermissionsOrderBy>>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Permission`. */
  createPermission?: Maybe<CreatePermissionPayload>;
  /** Creates a single `PermissionDomain`. */
  createPermissionDomain?: Maybe<CreatePermissionDomainPayload>;
  /** Deletes a single `Permission` using a unique key. */
  deletePermission?: Maybe<DeletePermissionPayload>;
  /** Deletes a single `Permission` using a unique key. */
  deletePermissionByName?: Maybe<DeletePermissionPayload>;
  /** Deletes a single `Permission` using its globally unique id. */
  deletePermissionByNodeId?: Maybe<DeletePermissionPayload>;
  /** Deletes a single `PermissionDomain` using a unique key. */
  deletePermissionDomain?: Maybe<DeletePermissionDomainPayload>;
  /** Deletes a single `PermissionDomain` using a unique key. */
  deletePermissionDomainByName?: Maybe<DeletePermissionDomainPayload>;
  /** Deletes a single `PermissionDomain` using its globally unique id. */
  deletePermissionDomainByNodeId?: Maybe<DeletePermissionDomainPayload>;
  /** Updates a single `Permission` using a unique key and a patch. */
  updatePermission?: Maybe<UpdatePermissionPayload>;
  /** Updates a single `Permission` using a unique key and a patch. */
  updatePermissionByName?: Maybe<UpdatePermissionPayload>;
  /** Updates a single `Permission` using its globally unique id and a patch. */
  updatePermissionByNodeId?: Maybe<UpdatePermissionPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePermissionArgs = {
  input: CreatePermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePermissionDomainArgs = {
  input: CreatePermissionDomainInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionArgs = {
  input: DeletePermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionByNameArgs = {
  input: DeletePermissionByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionByNodeIdArgs = {
  input: DeletePermissionByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionDomainArgs = {
  input: DeletePermissionDomainInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionDomainByNameArgs = {
  input: DeletePermissionDomainByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePermissionDomainByNodeIdArgs = {
  input: DeletePermissionDomainByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionArgs = {
  input: UpdatePermissionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionByNameArgs = {
  input: UpdatePermissionByNameInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePermissionByNodeIdArgs = {
  input: UpdatePermissionByNodeIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** A permission defines an ACL'd action on a given permission domain. */
export type Permission = Node & {
  __typename?: 'Permission';
  id: Scalars['Int'];
  /** Unique name for a permission inside a permission domain */
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `PermissionDomain` that is related to this `Permission`. */
  permissionDomain?: Maybe<PermissionDomain>;
  permissionDomainId: Scalars['Int'];
};

/**
 * A condition to be used against `Permission` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type PermissionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `permissionDomainId` field. */
  permissionDomainId?: InputMaybe<Scalars['Int']>;
};

/** A permission domain includes all permissions for a given service. */
export type PermissionDomain = Node & {
  __typename?: 'PermissionDomain';
  /** Unique ID of the permission domain */
  id: Scalars['Int'];
  /** Unique name of the permission domain */
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Permission`. */
  permissions: PermissionsConnection;
};


/** A permission domain includes all permissions for a given service. */
export type PermissionDomainPermissionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PermissionCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PermissionsOrderBy>>;
};

/**
 * A condition to be used against `PermissionDomain` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PermissionDomainCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `PermissionDomain` */
export type PermissionDomainInput = {
  /** Unique name of the permission domain */
  name: Scalars['String'];
};

/** A connection to a list of `PermissionDomain` values. */
export type PermissionDomainsConnection = {
  __typename?: 'PermissionDomainsConnection';
  /** A list of edges which contains the `PermissionDomain` and cursor to aid in pagination. */
  edges: Array<PermissionDomainsEdge>;
  /** A list of `PermissionDomain` objects. */
  nodes: Array<PermissionDomain>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `PermissionDomain` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `PermissionDomain` edge in the connection. */
export type PermissionDomainsEdge = {
  __typename?: 'PermissionDomainsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `PermissionDomain` at the end of the edge. */
  node: PermissionDomain;
};

/** Methods to use when ordering `PermissionDomain`. */
export enum PermissionDomainsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** An input for mutations affecting `Permission` */
export type PermissionInput = {
  id?: InputMaybe<Scalars['Int']>;
  /** Unique name for a permission inside a permission domain */
  name: Scalars['String'];
  permissionDomainId: Scalars['Int'];
};

/** Represents an update to a `Permission`. Fields that are set will be updated. */
export type PermissionPatch = {
  id?: InputMaybe<Scalars['Int']>;
  /** Unique name for a permission inside a permission domain */
  name?: InputMaybe<Scalars['String']>;
  permissionDomainId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Permission` values. */
export type PermissionsConnection = {
  __typename?: 'PermissionsConnection';
  /** A list of edges which contains the `Permission` and cursor to aid in pagination. */
  edges: Array<PermissionsEdge>;
  /** A list of `Permission` objects. */
  nodes: Array<Permission>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Permission` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Permission` edge in the connection. */
export type PermissionsEdge = {
  __typename?: 'PermissionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Permission` at the end of the edge. */
  node: Permission;
};

/** Methods to use when ordering `Permission`. */
export enum PermissionsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PermissionDomainIdAsc = 'PERMISSION_DOMAIN_ID_ASC',
  PermissionDomainIdDesc = 'PERMISSION_DOMAIN_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  permission?: Maybe<Permission>;
  permissionByName?: Maybe<Permission>;
  /** Reads a single `Permission` using its globally unique `ID`. */
  permissionByNodeId?: Maybe<Permission>;
  permissionDomain?: Maybe<PermissionDomain>;
  permissionDomainByName?: Maybe<PermissionDomain>;
  /** Reads a single `PermissionDomain` using its globally unique `ID`. */
  permissionDomainByNodeId?: Maybe<PermissionDomain>;
  /** Reads and enables pagination through a set of `PermissionDomain`. */
  permissionDomains?: Maybe<PermissionDomainsConnection>;
  /** Reads and enables pagination through a set of `Permission`. */
  permissions?: Maybe<PermissionsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionDomainArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionDomainByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionDomainByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionDomainsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PermissionDomainCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PermissionDomainsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPermissionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PermissionCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PermissionsOrderBy>>;
};

/** All input for the `updatePermissionByName` mutation. */
export type UpdatePermissionByNameInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** Unique name for a permission inside a permission domain */
  name: Scalars['String'];
  /** An object where the defined keys will be set on the `Permission` being updated. */
  patch: PermissionPatch;
};

/** All input for the `updatePermissionByNodeId` mutation. */
export type UpdatePermissionByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Permission` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Permission` being updated. */
  patch: PermissionPatch;
};

/** All input for the `updatePermission` mutation. */
export type UpdatePermissionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `Permission` being updated. */
  patch: PermissionPatch;
};

/** The output of our update `Permission` mutation. */
export type UpdatePermissionPayload = {
  __typename?: 'UpdatePermissionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Permission` that was updated by this mutation. */
  permission?: Maybe<Permission>;
  /** Reads a single `PermissionDomain` that is related to this `Permission`. */
  permissionDomain?: Maybe<PermissionDomain>;
  /** An edge for our `Permission`. May be used by Relay 1. */
  permissionEdge?: Maybe<PermissionsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Permission` mutation. */
export type UpdatePermissionPayloadPermissionEdgeArgs = {
  orderBy?: InputMaybe<Array<PermissionsOrderBy>>;
};

export type AddNewPermissionDomainMutationVariables = Exact<{
  data: CreatePermissionDomainInput;
}>;


export type AddNewPermissionDomainMutation = { __typename?: 'Mutation', createPermissionDomain?: { __typename?: 'CreatePermissionDomainPayload', permissionDomain?: { __typename?: 'PermissionDomain', id: number, name: string } | null } | null };

export type FetchAllPermissionDomainsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAllPermissionDomainsQuery = { __typename?: 'Query', permissionDomains?: { __typename?: 'PermissionDomainsConnection', nodes: Array<{ __typename?: 'PermissionDomain', id: number, name: string }> } | null };

export type DeletePermissionDomainMutationMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeletePermissionDomainMutationMutation = { __typename?: 'Mutation', deletePermissionDomain?: { __typename?: 'DeletePermissionDomainPayload', permissionDomain?: { __typename: 'PermissionDomain', id: number } | null } | null };

export type FetchNameOfPermissionDomainQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FetchNameOfPermissionDomainQuery = { __typename?: 'Query', permissionDomain?: { __typename?: 'PermissionDomain', name: string } | null };

export type CreatePermissionMutationMutationVariables = Exact<{
  data: CreatePermissionInput;
}>;


export type CreatePermissionMutationMutation = { __typename?: 'Mutation', createPermission?: { __typename?: 'CreatePermissionPayload', permission?: { __typename?: 'Permission', id: number, name: string } | null } | null };

export type FetchPermissionDomainInfosQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FetchPermissionDomainInfosQuery = { __typename?: 'Query', permissionDomain?: { __typename?: 'PermissionDomain', name: string, permissions: { __typename?: 'PermissionsConnection', nodes: Array<{ __typename?: 'Permission', id: number, name: string }> } } | null };


export const AddNewPermissionDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddNewPermissionDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePermissionDomainInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPermissionDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissionDomain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AddNewPermissionDomainMutation, AddNewPermissionDomainMutationVariables>;
export const FetchAllPermissionDomainsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchAllPermissionDomains"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissionDomains"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FetchAllPermissionDomainsQuery, FetchAllPermissionDomainsQueryVariables>;
export const DeletePermissionDomainMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePermissionDomainMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePermissionDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissionDomain"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DeletePermissionDomainMutationMutation, DeletePermissionDomainMutationMutationVariables>;
export const FetchNameOfPermissionDomainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchNameOfPermissionDomain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissionDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<FetchNameOfPermissionDomainQuery, FetchNameOfPermissionDomainQueryVariables>;
export const CreatePermissionMutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPermissionMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePermissionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permission"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreatePermissionMutationMutation, CreatePermissionMutationMutationVariables>;
export const FetchPermissionDomainInfosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchPermissionDomainInfos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"permissionDomain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchPermissionDomainInfosQuery, FetchPermissionDomainInfosQueryVariables>;
export type WithTypename<T extends { __typename?: any }> = Partial<T> & { __typename: NonNullable<T['__typename']> };

export type GraphCacheKeysConfig = {
  CreatePermissionDomainPayload?: (data: WithTypename<CreatePermissionDomainPayload>) => null | string,
  CreatePermissionPayload?: (data: WithTypename<CreatePermissionPayload>) => null | string,
  DeletePermissionDomainPayload?: (data: WithTypename<DeletePermissionDomainPayload>) => null | string,
  DeletePermissionPayload?: (data: WithTypename<DeletePermissionPayload>) => null | string,
  PageInfo?: (data: WithTypename<PageInfo>) => null | string,
  Permission?: (data: WithTypename<Permission>) => null | string,
  PermissionDomain?: (data: WithTypename<PermissionDomain>) => null | string,
  PermissionDomainsConnection?: (data: WithTypename<PermissionDomainsConnection>) => null | string,
  PermissionDomainsEdge?: (data: WithTypename<PermissionDomainsEdge>) => null | string,
  PermissionsConnection?: (data: WithTypename<PermissionsConnection>) => null | string,
  PermissionsEdge?: (data: WithTypename<PermissionsEdge>) => null | string,
  UpdatePermissionPayload?: (data: WithTypename<UpdatePermissionPayload>) => null | string
}

export type GraphCacheResolvers = {
  Query?: {
    node?: GraphCacheResolver<WithTypename<Query>, QueryNodeArgs, WithTypename<Permission> | WithTypename<PermissionDomain> | WithTypename<Query> | string>,
    nodeId?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, Scalars['ID'] | string>,
    permission?: GraphCacheResolver<WithTypename<Query>, QueryPermissionArgs, WithTypename<Permission> | string>,
    permissionByName?: GraphCacheResolver<WithTypename<Query>, QueryPermissionByNameArgs, WithTypename<Permission> | string>,
    permissionByNodeId?: GraphCacheResolver<WithTypename<Query>, QueryPermissionByNodeIdArgs, WithTypename<Permission> | string>,
    permissionDomain?: GraphCacheResolver<WithTypename<Query>, QueryPermissionDomainArgs, WithTypename<PermissionDomain> | string>,
    permissionDomainByName?: GraphCacheResolver<WithTypename<Query>, QueryPermissionDomainByNameArgs, WithTypename<PermissionDomain> | string>,
    permissionDomainByNodeId?: GraphCacheResolver<WithTypename<Query>, QueryPermissionDomainByNodeIdArgs, WithTypename<PermissionDomain> | string>,
    permissionDomains?: GraphCacheResolver<WithTypename<Query>, QueryPermissionDomainsArgs, WithTypename<PermissionDomainsConnection> | string>,
    permissions?: GraphCacheResolver<WithTypename<Query>, QueryPermissionsArgs, WithTypename<PermissionsConnection> | string>,
    query?: GraphCacheResolver<WithTypename<Query>, Record<string, never>, WithTypename<Query> | string>
  },
  CreatePermissionDomainPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<CreatePermissionDomainPayload>, Record<string, never>, Scalars['String'] | string>,
    permissionDomain?: GraphCacheResolver<WithTypename<CreatePermissionDomainPayload>, Record<string, never>, WithTypename<PermissionDomain> | string>,
    permissionDomainEdge?: GraphCacheResolver<WithTypename<CreatePermissionDomainPayload>, CreatePermissionDomainPayloadPermissionDomainEdgeArgs, WithTypename<PermissionDomainsEdge> | string>,
    query?: GraphCacheResolver<WithTypename<CreatePermissionDomainPayload>, Record<string, never>, WithTypename<Query> | string>
  },
  CreatePermissionPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<CreatePermissionPayload>, Record<string, never>, Scalars['String'] | string>,
    permission?: GraphCacheResolver<WithTypename<CreatePermissionPayload>, Record<string, never>, WithTypename<Permission> | string>,
    permissionDomain?: GraphCacheResolver<WithTypename<CreatePermissionPayload>, Record<string, never>, WithTypename<PermissionDomain> | string>,
    permissionEdge?: GraphCacheResolver<WithTypename<CreatePermissionPayload>, CreatePermissionPayloadPermissionEdgeArgs, WithTypename<PermissionsEdge> | string>,
    query?: GraphCacheResolver<WithTypename<CreatePermissionPayload>, Record<string, never>, WithTypename<Query> | string>
  },
  DeletePermissionDomainPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<DeletePermissionDomainPayload>, Record<string, never>, Scalars['String'] | string>,
    deletedPermissionDomainNodeId?: GraphCacheResolver<WithTypename<DeletePermissionDomainPayload>, Record<string, never>, Scalars['ID'] | string>,
    permissionDomain?: GraphCacheResolver<WithTypename<DeletePermissionDomainPayload>, Record<string, never>, WithTypename<PermissionDomain> | string>,
    permissionDomainEdge?: GraphCacheResolver<WithTypename<DeletePermissionDomainPayload>, DeletePermissionDomainPayloadPermissionDomainEdgeArgs, WithTypename<PermissionDomainsEdge> | string>,
    query?: GraphCacheResolver<WithTypename<DeletePermissionDomainPayload>, Record<string, never>, WithTypename<Query> | string>
  },
  DeletePermissionPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<DeletePermissionPayload>, Record<string, never>, Scalars['String'] | string>,
    deletedPermissionNodeId?: GraphCacheResolver<WithTypename<DeletePermissionPayload>, Record<string, never>, Scalars['ID'] | string>,
    permission?: GraphCacheResolver<WithTypename<DeletePermissionPayload>, Record<string, never>, WithTypename<Permission> | string>,
    permissionDomain?: GraphCacheResolver<WithTypename<DeletePermissionPayload>, Record<string, never>, WithTypename<PermissionDomain> | string>,
    permissionEdge?: GraphCacheResolver<WithTypename<DeletePermissionPayload>, DeletePermissionPayloadPermissionEdgeArgs, WithTypename<PermissionsEdge> | string>,
    query?: GraphCacheResolver<WithTypename<DeletePermissionPayload>, Record<string, never>, WithTypename<Query> | string>
  },
  PageInfo?: {
    endCursor?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Cursor'] | string>,
    hasNextPage?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Boolean'] | string>,
    hasPreviousPage?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Boolean'] | string>,
    startCursor?: GraphCacheResolver<WithTypename<PageInfo>, Record<string, never>, Scalars['Cursor'] | string>
  },
  Permission?: {
    id?: GraphCacheResolver<WithTypename<Permission>, Record<string, never>, Scalars['Int'] | string>,
    name?: GraphCacheResolver<WithTypename<Permission>, Record<string, never>, Scalars['String'] | string>,
    nodeId?: GraphCacheResolver<WithTypename<Permission>, Record<string, never>, Scalars['ID'] | string>,
    permissionDomain?: GraphCacheResolver<WithTypename<Permission>, Record<string, never>, WithTypename<PermissionDomain> | string>,
    permissionDomainId?: GraphCacheResolver<WithTypename<Permission>, Record<string, never>, Scalars['Int'] | string>
  },
  PermissionDomain?: {
    id?: GraphCacheResolver<WithTypename<PermissionDomain>, Record<string, never>, Scalars['Int'] | string>,
    name?: GraphCacheResolver<WithTypename<PermissionDomain>, Record<string, never>, Scalars['String'] | string>,
    nodeId?: GraphCacheResolver<WithTypename<PermissionDomain>, Record<string, never>, Scalars['ID'] | string>,
    permissions?: GraphCacheResolver<WithTypename<PermissionDomain>, PermissionDomainPermissionsArgs, WithTypename<PermissionsConnection> | string>
  },
  PermissionDomainsConnection?: {
    edges?: GraphCacheResolver<WithTypename<PermissionDomainsConnection>, Record<string, never>, Array<WithTypename<PermissionDomainsEdge> | string>>,
    nodes?: GraphCacheResolver<WithTypename<PermissionDomainsConnection>, Record<string, never>, Array<WithTypename<PermissionDomain> | string>>,
    pageInfo?: GraphCacheResolver<WithTypename<PermissionDomainsConnection>, Record<string, never>, WithTypename<PageInfo> | string>,
    totalCount?: GraphCacheResolver<WithTypename<PermissionDomainsConnection>, Record<string, never>, Scalars['Int'] | string>
  },
  PermissionDomainsEdge?: {
    cursor?: GraphCacheResolver<WithTypename<PermissionDomainsEdge>, Record<string, never>, Scalars['Cursor'] | string>,
    node?: GraphCacheResolver<WithTypename<PermissionDomainsEdge>, Record<string, never>, WithTypename<PermissionDomain> | string>
  },
  PermissionsConnection?: {
    edges?: GraphCacheResolver<WithTypename<PermissionsConnection>, Record<string, never>, Array<WithTypename<PermissionsEdge> | string>>,
    nodes?: GraphCacheResolver<WithTypename<PermissionsConnection>, Record<string, never>, Array<WithTypename<Permission> | string>>,
    pageInfo?: GraphCacheResolver<WithTypename<PermissionsConnection>, Record<string, never>, WithTypename<PageInfo> | string>,
    totalCount?: GraphCacheResolver<WithTypename<PermissionsConnection>, Record<string, never>, Scalars['Int'] | string>
  },
  PermissionsEdge?: {
    cursor?: GraphCacheResolver<WithTypename<PermissionsEdge>, Record<string, never>, Scalars['Cursor'] | string>,
    node?: GraphCacheResolver<WithTypename<PermissionsEdge>, Record<string, never>, WithTypename<Permission> | string>
  },
  UpdatePermissionPayload?: {
    clientMutationId?: GraphCacheResolver<WithTypename<UpdatePermissionPayload>, Record<string, never>, Scalars['String'] | string>,
    permission?: GraphCacheResolver<WithTypename<UpdatePermissionPayload>, Record<string, never>, WithTypename<Permission> | string>,
    permissionDomain?: GraphCacheResolver<WithTypename<UpdatePermissionPayload>, Record<string, never>, WithTypename<PermissionDomain> | string>,
    permissionEdge?: GraphCacheResolver<WithTypename<UpdatePermissionPayload>, UpdatePermissionPayloadPermissionEdgeArgs, WithTypename<PermissionsEdge> | string>,
    query?: GraphCacheResolver<WithTypename<UpdatePermissionPayload>, Record<string, never>, WithTypename<Query> | string>
  }
};

export type GraphCacheOptimisticUpdaters = {
  createPermission?: GraphCacheOptimisticMutationResolver<MutationCreatePermissionArgs, Maybe<WithTypename<CreatePermissionPayload>>>,
  createPermissionDomain?: GraphCacheOptimisticMutationResolver<MutationCreatePermissionDomainArgs, Maybe<WithTypename<CreatePermissionDomainPayload>>>,
  deletePermission?: GraphCacheOptimisticMutationResolver<MutationDeletePermissionArgs, Maybe<WithTypename<DeletePermissionPayload>>>,
  deletePermissionByName?: GraphCacheOptimisticMutationResolver<MutationDeletePermissionByNameArgs, Maybe<WithTypename<DeletePermissionPayload>>>,
  deletePermissionByNodeId?: GraphCacheOptimisticMutationResolver<MutationDeletePermissionByNodeIdArgs, Maybe<WithTypename<DeletePermissionPayload>>>,
  deletePermissionDomain?: GraphCacheOptimisticMutationResolver<MutationDeletePermissionDomainArgs, Maybe<WithTypename<DeletePermissionDomainPayload>>>,
  deletePermissionDomainByName?: GraphCacheOptimisticMutationResolver<MutationDeletePermissionDomainByNameArgs, Maybe<WithTypename<DeletePermissionDomainPayload>>>,
  deletePermissionDomainByNodeId?: GraphCacheOptimisticMutationResolver<MutationDeletePermissionDomainByNodeIdArgs, Maybe<WithTypename<DeletePermissionDomainPayload>>>,
  updatePermission?: GraphCacheOptimisticMutationResolver<MutationUpdatePermissionArgs, Maybe<WithTypename<UpdatePermissionPayload>>>,
  updatePermissionByName?: GraphCacheOptimisticMutationResolver<MutationUpdatePermissionByNameArgs, Maybe<WithTypename<UpdatePermissionPayload>>>,
  updatePermissionByNodeId?: GraphCacheOptimisticMutationResolver<MutationUpdatePermissionByNodeIdArgs, Maybe<WithTypename<UpdatePermissionPayload>>>
};

export type GraphCacheUpdaters = {
  Mutation?: {
    createPermission?: GraphCacheUpdateResolver<{ createPermission: Maybe<WithTypename<CreatePermissionPayload>> }, MutationCreatePermissionArgs>,
    createPermissionDomain?: GraphCacheUpdateResolver<{ createPermissionDomain: Maybe<WithTypename<CreatePermissionDomainPayload>> }, MutationCreatePermissionDomainArgs>,
    deletePermission?: GraphCacheUpdateResolver<{ deletePermission: Maybe<WithTypename<DeletePermissionPayload>> }, MutationDeletePermissionArgs>,
    deletePermissionByName?: GraphCacheUpdateResolver<{ deletePermissionByName: Maybe<WithTypename<DeletePermissionPayload>> }, MutationDeletePermissionByNameArgs>,
    deletePermissionByNodeId?: GraphCacheUpdateResolver<{ deletePermissionByNodeId: Maybe<WithTypename<DeletePermissionPayload>> }, MutationDeletePermissionByNodeIdArgs>,
    deletePermissionDomain?: GraphCacheUpdateResolver<{ deletePermissionDomain: Maybe<WithTypename<DeletePermissionDomainPayload>> }, MutationDeletePermissionDomainArgs>,
    deletePermissionDomainByName?: GraphCacheUpdateResolver<{ deletePermissionDomainByName: Maybe<WithTypename<DeletePermissionDomainPayload>> }, MutationDeletePermissionDomainByNameArgs>,
    deletePermissionDomainByNodeId?: GraphCacheUpdateResolver<{ deletePermissionDomainByNodeId: Maybe<WithTypename<DeletePermissionDomainPayload>> }, MutationDeletePermissionDomainByNodeIdArgs>,
    updatePermission?: GraphCacheUpdateResolver<{ updatePermission: Maybe<WithTypename<UpdatePermissionPayload>> }, MutationUpdatePermissionArgs>,
    updatePermissionByName?: GraphCacheUpdateResolver<{ updatePermissionByName: Maybe<WithTypename<UpdatePermissionPayload>> }, MutationUpdatePermissionByNameArgs>,
    updatePermissionByNodeId?: GraphCacheUpdateResolver<{ updatePermissionByNodeId: Maybe<WithTypename<UpdatePermissionPayload>> }, MutationUpdatePermissionByNodeIdArgs>
  },
  Subscription?: {},
};

export type GraphCacheConfig = {
  schema?: IntrospectionData,
  updates?: GraphCacheUpdaters,
  keys?: GraphCacheKeysConfig,
  optimistic?: GraphCacheOptimisticUpdaters,
  resolvers?: GraphCacheResolvers,
  storage?: GraphCacheStorageAdapter
};