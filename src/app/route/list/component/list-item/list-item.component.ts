import {Component, Input} from '@angular/core';
import {IItem} from "../../list.model";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass'],
})
export class AppListItemComponent {
  @Input() listItem?: IItem;
}
