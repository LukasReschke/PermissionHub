import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "CreatePermissionDomainPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "permissionDomain",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomain",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "permissionDomainEdge",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomainsEdge",
              "ofType": null
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "CreatePermissionPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "permission",
            "type": {
              "kind": "OBJECT",
              "name": "Permission",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "permissionDomain",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomain",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "permissionEdge",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionsEdge",
              "ofType": null
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeletePermissionDomainPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "deletedPermissionDomainNodeId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "permissionDomain",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomain",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "permissionDomainEdge",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomainsEdge",
              "ofType": null
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "DeletePermissionPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "deletedPermissionNodeId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "permission",
            "type": {
              "kind": "OBJECT",
              "name": "Permission",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "permissionDomain",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomain",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "permissionEdge",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionsEdge",
              "ofType": null
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createPermission",
            "type": {
              "kind": "OBJECT",
              "name": "CreatePermissionPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createPermissionDomain",
            "type": {
              "kind": "OBJECT",
              "name": "CreatePermissionDomainPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deletePermission",
            "type": {
              "kind": "OBJECT",
              "name": "DeletePermissionPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deletePermissionByName",
            "type": {
              "kind": "OBJECT",
              "name": "DeletePermissionPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deletePermissionByNodeId",
            "type": {
              "kind": "OBJECT",
              "name": "DeletePermissionPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deletePermissionDomain",
            "type": {
              "kind": "OBJECT",
              "name": "DeletePermissionDomainPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deletePermissionDomainByName",
            "type": {
              "kind": "OBJECT",
              "name": "DeletePermissionDomainPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deletePermissionDomainByNodeId",
            "type": {
              "kind": "OBJECT",
              "name": "DeletePermissionDomainPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updatePermission",
            "type": {
              "kind": "OBJECT",
              "name": "UpdatePermissionPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updatePermissionByName",
            "type": {
              "kind": "OBJECT",
              "name": "UpdatePermissionPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updatePermissionByNodeId",
            "type": {
              "kind": "OBJECT",
              "name": "UpdatePermissionPayload",
              "ofType": null
            },
            "args": [
              {
                "name": "input",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INTERFACE",
        "name": "Node",
        "fields": [
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": [],
        "possibleTypes": [
          {
            "kind": "OBJECT",
            "name": "Permission"
          },
          {
            "kind": "OBJECT",
            "name": "PermissionDomain"
          },
          {
            "kind": "OBJECT",
            "name": "Query"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PageInfo",
        "fields": [
          {
            "name": "endCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasNextPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "hasPreviousPage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "startCursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Permission",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "permissionDomain",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomain",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "permissionDomainId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PermissionDomain",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "permissions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PermissionsConnection",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PermissionDomainsConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PermissionDomainsEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PermissionDomain",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PermissionDomainsEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PermissionDomain",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PermissionsConnection",
        "fields": [
          {
            "name": "edges",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PermissionsEdge",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Permission",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "pageInfo",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "PageInfo",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "totalCount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PermissionsEdge",
        "fields": [
          {
            "name": "cursor",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "node",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Permission",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "node",
            "type": {
              "kind": "INTERFACE",
              "name": "Node",
              "ofType": null
            },
            "args": [
              {
                "name": "nodeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "nodeId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "permission",
            "type": {
              "kind": "OBJECT",
              "name": "Permission",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "permissionByName",
            "type": {
              "kind": "OBJECT",
              "name": "Permission",
              "ofType": null
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "permissionByNodeId",
            "type": {
              "kind": "OBJECT",
              "name": "Permission",
              "ofType": null
            },
            "args": [
              {
                "name": "nodeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "permissionDomain",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomain",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "permissionDomainByName",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomain",
              "ofType": null
            },
            "args": [
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "permissionDomainByNodeId",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomain",
              "ofType": null
            },
            "args": [
              {
                "name": "nodeId",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "permissionDomains",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomainsConnection",
              "ofType": null
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "permissions",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionsConnection",
              "ofType": null
            },
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "condition",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "query",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Query",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": [
          {
            "kind": "INTERFACE",
            "name": "Node"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UpdatePermissionPayload",
        "fields": [
          {
            "name": "clientMutationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "permission",
            "type": {
              "kind": "OBJECT",
              "name": "Permission",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "permissionDomain",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionDomain",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "permissionEdge",
            "type": {
              "kind": "OBJECT",
              "name": "PermissionsEdge",
              "ofType": null
            },
            "args": [
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "query",
            "type": {
              "kind": "OBJECT",
              "name": "Query",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;