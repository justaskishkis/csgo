import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes} from "./route.constant";

const imports = [
  RouterModule.forRoot(appRoutes)
];

const exports = [
  RouterModule
];

@NgModule({
  imports,
  exports,
})
export class AppRouteModule {
}
