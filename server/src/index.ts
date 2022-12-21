import express = require("express");
import { postgraphile } from "postgraphile";

const app = express();

app.use(
  postgraphile(
    "postgres://postgres:password@db:5432/postgres",
    "app_public",
    {
      subscriptions: true,
      watchPg: true,
      dynamicJson: true,
      setofFunctionsContainNulls: false,
      ignoreRBAC: false,
      showErrorStack: "json",
      extendedErrors: ["hint", "detail", "errcode"],
      appendPlugins: [require("@graphile-contrib/pg-simplify-inflector")],
      exportGqlSchemaPath: "schema.graphql",
      graphiql: true,
      enhanceGraphiql: true,
      allowExplain(req) {
        return true;
      },
      enableQueryBatching: true,
      legacyRelations: "omit",
    }
  )
);

app.listen(3000);
