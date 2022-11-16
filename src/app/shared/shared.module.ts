import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppButtonComponent} from "./button/button.component";
import {AppHeadingComponent} from "./heading/heading.component";
import {AppImageComponent} from "./image/image.component";
import {AppLoadingComponent} from "./loading/loading.component";

const declarations = [
  AppButtonComponent, AppHeadingComponent, AppImageComponent, AppLoadingComponent
];

const imports = [
  CommonModule
];

@NgModule({
  imports,
  declarations,
  exports: declarations,
})
export class AppSharedModule {
}
