import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppHeaderContainerComponent } from './header/container/header-container.component';
import { AppLayoutContainerComponent } from './layout/container/layout-container.component';
import { AppSharedModule } from '../shared/shared.module';
import { AppUserContainerComponent } from './user/container/user-container.component';

const declarations = [
  AppLayoutContainerComponent,
  AppHeaderContainerComponent,
  AppUserContainerComponent,
];

const imports = [CommonModule];

@NgModule({
  imports: [imports, AppSharedModule],
  declarations,
  exports: declarations,
})
export class AppFeatureModule {}
