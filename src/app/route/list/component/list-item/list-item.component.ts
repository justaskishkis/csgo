import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IItem } from '../../list.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.sass'],
})
export class AppListItemComponent {
  @Input() listItem?: IItem;

  @Input() listItemActionText?: string;

  @Output() onItemLick = new EventEmitter<IItem>();

  handleOnItemClick(): void {
    this.onItemLick.emit(this.listItem);
  }
}
