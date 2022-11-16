import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IItem } from '../list.model';
import { AppListService } from '../service/list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./list-container.component.sass'],
})
export class AppListContainerComponent {
  itemList$: Observable<IItem[] | null | undefined>;

  translate = {
    heading: 'Lottery list',
    itemActionText: 'Open',
  };

  constructor(private appListService: AppListService) {
    this.itemList$ = this.appListService.itemList$;
  }

  handleOnItemClick(item: IItem): void {
    this.appListService.handleOnItemClick(item);
  }
}
