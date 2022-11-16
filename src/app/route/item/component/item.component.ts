import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class AppItemComponent {
  @Input() item?: any;
}
