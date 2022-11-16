import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppGqlModule } from './global/gql/gql.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouteModule } from './route/route.module';
import { AppSharedModule } from './shared/shared.module';
import { AppFeatureModule } from './feature/feature.module';
import { AppListContainerComponent } from './route/list/container/list-container.component';
import { AppItemContainerComponent } from './route/item/container/item-container.component';
import { AppListItemComponent } from './route/list/component/list-item/list-item.component';
import { AppListService } from './route/list/service/list.service';
import { AppItemComponent } from './route/item/component/item.component';
import { AppItemService } from './route/item/service/item.service';

const declarations = [
  AppComponent,
  // TODO: would use lazy load approach but to save time going this way
  AppListContainerComponent,
  AppItemContainerComponent,
  AppListItemComponent,
  AppItemComponent,
];

const imports = [
  BrowserModule,
  AppGqlModule,
  AppRouteModule,
  AppSharedModule,
  AppFeatureModule,
];

const providers = [AppListService, AppItemService];

@NgModule({
  declarations,
  imports,
  providers,
  bootstrap: [AppComponent],
})
export class AppModule {}
