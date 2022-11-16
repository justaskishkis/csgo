import { Component } from '@angular/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.sass'],
})
export class AppHeaderContainerComponent {
  translate = {
    heading: 'Lets play!',
  };
}
