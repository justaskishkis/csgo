import { Routes } from '@angular/router';
import { AppListContainerComponent } from './list/container/list-container.component';
import { AppItemContainerComponent } from './item/container/item-container.component';

export const appRoutePaths = {
  default: {
    key: '/list',
  },
  list: {
    key: 'list',
  },
  item: {
    key: 'item/:itemId',
    value: appRouteItemValue,
  },
};

export function appRouteItemValue(itemId: string | null | undefined): string {
  return `item/${itemId}`;
}

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: appRoutePaths.default.key,
    pathMatch: 'full',
  },
  {
    path: appRoutePaths.list.key,
    component: AppListContainerComponent,
  },
  {
    path: appRoutePaths.item.key,
    component: AppItemContainerComponent,
  },
  {
    path: '**',
    redirectTo: appRoutePaths.default.key,
    pathMatch: 'full',
  },
];
