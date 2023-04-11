import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LightButtonComponent } from './components/light-button/light-button.component';
import { TabsContainerComponent } from './components/tabs-container/tabs-container.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TimerComponent } from './components/timer/timer.component';
import { ParseTimerPipe } from './pipelines/parse-timer/parse-timer.pipe';

@NgModule({
  declarations: [
    LightButtonComponent,
    TabsContainerComponent,
    TimerComponent,
    ParseTimerPipe,
    TaskItemComponent,
  ],
  imports: [CommonModule],
  exports: [
    LightButtonComponent,
    TabsContainerComponent,
    TimerComponent,
    ParseTimerPipe,
    TaskItemComponent,
  ],
})
export class SharedModule {}
