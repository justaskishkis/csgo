import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.sass'],
})
export class AppImageComponent {
  @Input() imageUrl?: string | null;

  // TODO: handle image loading state with a default image

  // TODO: handle image state when image load failed
}
