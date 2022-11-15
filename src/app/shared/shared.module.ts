import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppButtonComponent} from "./button/button.component";
import {AppHeadingComponent} from "./heading/heading.component";
import {AppImageComponent} from "./image/image.component";

const declarations = [
  AppButtonComponent, AppHeadingComponent, AppImageComponent
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
