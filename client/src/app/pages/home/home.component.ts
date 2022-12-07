import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  LONGBREAK_BG_COLOR,
  POMODORO_BG_COLOR,
  SHORTBREAK_BG_COLOR,
} from 'src/app/shared/constants/colors.const';
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
        color: POMODORO_BG_COLOR,
        isActive: true,
      },
      {
        id: 2,
        name: 'Short break',
        templateRef: this.shortBreakTemplate,
        color: SHORTBREAK_BG_COLOR,
      },
      {
        id: 3,
        name: 'Long break',
        templateRef: this.longBreakTemplate,
        color: LONGBREAK_BG_COLOR,
      },
    ];
    this.selectedTab = this.tabs[0];
    this.cdr.detectChanges();
  }

  selectTab(tab: Tab) {
    this.selectedTab = tab;
  }
}
