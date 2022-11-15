import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass'],
})
export class AppImageComponent {
  @Input() imageUrl?: string | null;
}
