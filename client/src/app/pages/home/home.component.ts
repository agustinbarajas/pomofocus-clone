import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Tab } from 'src/app/shared/interfaces/tab.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('pomodoroTemplate') pomodoroRef!: TemplateRef<any>;
  @ViewChild('shortBreakTemplate') shortRef!: TemplateRef<any>;
  @ViewChild('longBreakTemplate') longRef!: TemplateRef<any>;
  tabs: Tab[] = [
    {
      name: 'Pomodoro',
      contentRef: this.pomodoroRef,
      color: '',
      isActive: true,
    },
    {
      name: 'Short break',
      contentRef: this.shortRef,
      color: '',
    },
    {
      name: 'Long break',
      contentRef: this.longRef,
      color: '',
    },
  ];
}
