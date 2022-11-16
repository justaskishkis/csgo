import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppItemService } from '../service/item.service';
import { IItemMutated } from '../item.model';

@Component({
  selector: 'app-item-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.sass'],
})
export class AppItemContainerComponent {
  item$: Observable<IItemMutated | null | undefined>;

  translate = {
    heading: 'Item',
  };

  constructor(private appItemService: AppItemService) {
    this.item$ = this.appItemService.item$;
  }
}
