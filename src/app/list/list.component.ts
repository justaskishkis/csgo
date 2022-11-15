import {Component} from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import {map} from "rxjs";
import {ListQueryQuery} from "../../../graphql/generated";

const listQuery = gql`
  query ListQuery {
    boxes(free: false, purchasable: true, openable: true) {
      edges {
        node {
          id
          name
          iconUrl
          cost
        }
      }
    }
  }
`;

// type added from generated.ts
export type IItems = Array<{ __typename?: 'BoxEdge', node?: { __typename?: 'Box', id: string, name?: string | null, iconUrl?: string | null, cost?: number | null } | null } | null> | null;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  items?: IItems = [];

  constructor(private apollo: Apollo) {
  }

  ngOnInit() {
    this
      .getItems()
      .subscribe(items => this.items = items);
  }

  getItems() {
    return this.apollo.query<ListQueryQuery>({
      query: listQuery,
    })
      .pipe(
        map(({data}) => data.boxes.edges),
        // TODO: handle error locally if needed
      );
  }
}
