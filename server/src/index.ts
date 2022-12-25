import express = require("express");
import { postgraphile } from "postgraphile";

const app = express();

app.use(
  postgraphile(
    "postgres://permissionhub_postgraphile:password@db:5432/postgres",
    "app_public",
    {
      subscriptions: true,
      enableCors: true,
      watchPg: true,
      dynamicJson: true,
      setofFunctionsContainNulls: false,
      ownerConnectionString: "postgres://postgres:password@db:5432/postgres",
      ignoreRBAC: false,
      pgDefaultRole: "permissionhub_admin",
      showErrorStack: "json",
      extendedErrors: ["hint", "detail", "errcode"],
      appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
      exportGqlSchemaPath: "schema.graphql",
      graphiql: true,
      classicIds: true,
      enhanceGraphiql: true,
      allowExplain(req) {
        return true;
      },
      enableQueryBatching: true,
      legacyRelations: "omit",
    }
  )
);

app.listen(3001);
