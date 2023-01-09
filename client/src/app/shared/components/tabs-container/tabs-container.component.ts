import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Tab } from '../../interfaces/tab.interface';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsContainerComponent {
  @Input() tabs!: Tab[];
  @Output() selectTab = new EventEmitter<Tab>();

  changeTab(tab: Tab) {
    this.tabs = this.tabs.map(({ id, isActive, ...rest }) => ({
      id,
      ...rest,
      isActive: tab.id === id,
    }));
    this.selectTab.emit(tab);
  }

  trackCurrentTab(index: number, tab: Tab) {
    return tab.id;
  }
}
