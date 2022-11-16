import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { itemMutation } from '../item.network';
import { IItemMutated } from '../item.model';

@Injectable()
export class AppItemService {
  item$: Observable<IItemMutated | null | undefined> = new Observable<
    IItemMutated | null | undefined
  >();

  constructor(
    // TODO: build a NetworkService to wrap Apollo functionality
    private apollo: Apollo,
    private router: Router
  ) {
    this.handleRouter();
  }

  private handleRouter(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // TODO: i would use redux state management for working with router, so this time i just manually get the param
        const urlReworked = event.url.split('/');
        const itemId = urlReworked[urlReworked.length - 1];
        this.getItem(itemId);
      }
    });
  }

  private getItem(itemId: string): void {
    this.item$ = this.apollo
      .mutate<any>({
        mutation: itemMutation,
        variables: {
          input: {
            boxId: itemId,
          },
        },
      })
      .pipe(map(({ data }) => data));
  }
}
