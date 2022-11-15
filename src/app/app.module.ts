import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppGqlModule} from "./global/gql/gql.module";
import {BrowserModule} from "@angular/platform-browser";
import {AppRouteModule} from "./route/route.module";
import {AppSharedModule} from "./shared/shared.module";
import {AppFeatureModule} from "./feature/feature.module";
import {AppListContainerComponent} from "./route/list/container/list-container.component";
import {AppItemContainerComponent} from "./route/item/container/item-container.component";
import {AppListItemComponent} from "./route/list/component/list-item/list-item.component";

const declarations = [
  AppComponent,
  AppListContainerComponent,
  AppItemContainerComponent,
  AppListItemComponent,
];

const imports = [
  BrowserModule,
  AppGqlModule,
  AppRouteModule,
  AppSharedModule,
  AppFeatureModule,
];

@NgModule({
  declarations,
  imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
