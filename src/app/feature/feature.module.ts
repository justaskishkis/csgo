import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppHeaderContainerComponent} from "./header/container/header-container.component";
import {AppLayoutContainerComponent} from "./layout/container/layout-container.component";

const declarations = [
  AppLayoutContainerComponent,
  AppHeaderContainerComponent,
];

const imports = [
  CommonModule,
];

@NgModule({
  imports,
  declarations,
  exports: declarations,
})
export class AppFeatureModule {
}
