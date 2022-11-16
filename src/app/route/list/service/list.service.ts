import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { appRouteItemValue } from '../../route.constant';
import { IItem } from '../list.model';
import { map, Observable } from 'rxjs';
import { ListQueryQuery } from '../../../../../graphql/generated';
import { listQuery } from '../list.network';
import { Apollo } from 'apollo-angular';

@Injectable()
export class AppListService {
  itemList$: Observable<IItem[] | null | undefined> = new Observable<
    IItem[] | null | undefined
  >();

  constructor(
    // TODO: build a NetworkService to wrap Apollo functionality
    private apollo: Apollo,
    private router: Router
  ) {
    this.getItems();
  }

  handleOnItemClick(item: IItem): void {
    const itemId = item?.node?.id;
    this.router.navigate([appRouteItemValue(itemId)]);
  }

  private getItems(): void {
    this.itemList$ = this.apollo
      .query<ListQueryQuery>({
        query: listQuery,
      })
      .pipe(
        map(({ data }): IItem[] | null | undefined => data.boxes.edges)
        // TODO: handle error locally if needed
      );
  }
}
