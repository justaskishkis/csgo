import {Component} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from "rxjs";
import {ListQueryQuery} from "../../../../../graphql/generated";
import {IItem} from "../list.model";
import {listQuery} from "../list.network";

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.sass'],
})
export class AppListContainerComponent {
  items?: IItem[] | null = [];

  headingText = 'List';

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
