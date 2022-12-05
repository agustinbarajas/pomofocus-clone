import { Component, Input } from '@angular/core';
import { Tab } from '../../interfaces/tab.interface';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss'],
})
export class TabsContainerComponent {
  @Input() tabs!: Tab[];
}
