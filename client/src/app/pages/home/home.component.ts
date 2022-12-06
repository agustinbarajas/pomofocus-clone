import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Tab } from 'src/app/shared/interfaces/tab.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('pomodoroTemplate') pomodoroTemplate!: TemplateRef<HTMLElement>;
  @ViewChild('shortBreakTemplate')
  shortBreakTemplate!: TemplateRef<HTMLElement>;
  @ViewChild('longBreakTemplate') longBreakTemplate!: TemplateRef<HTMLElement>;
  tabs: Tab[] = [];
  selectedTab!: Tab;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.tabs = [
      {
        id: 1,
        name: 'Pomodoro',
        templateRef: this.pomodoroTemplate,
        color: '',
        isActive: true,
      },
      {
        id: 2,
        name: 'Short break',
        templateRef: this.shortBreakTemplate,
        color: '',
      },
      {
        id: 3,
        name: 'Long break',
        templateRef: this.longBreakTemplate,
        color: '',
      },
    ];
    this.selectedTab = this.tabs[0];
    this.cdr.detectChanges();
  }

  selectTab(tab: Tab) {
    this.selectedTab = tab;
  }
}
