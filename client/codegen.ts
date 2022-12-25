import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: ['typescript-urql-graphcache'],
    },
    './src/generated-introspection.tsx': {
      plugins: ['urql-introspection'],
      config: {
        minify: true
      },
    }
  },
};

export default config;
