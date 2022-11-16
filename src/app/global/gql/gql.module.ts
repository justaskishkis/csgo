import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { gqlUrl } from './gql.constant';
import { errorLink } from './gql.util';

@NgModule({
  declarations: [],
  imports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: gqlUrl,
          }),
          errorLink,
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class AppGqlModule {}
