import {Routes} from "@angular/router";
import {AppListContainerComponent} from "./list/container/list-container.component";
import {AppItemContainerComponent} from "./item/container/item-container.component";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: AppListContainerComponent,
  },
  {
    path: 'item',
    component: AppItemContainerComponent,
  }
];
