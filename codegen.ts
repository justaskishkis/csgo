import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://api-staging.csgoroll.com/graphql',
  documents: './src/**/*.ts',
  generates: {
    './graphql/generated.ts': {
      plugins: [ 'typescript', 'typescript-operations', 'typescript-apollo-angular' ]
    }
  }
}
export default config
