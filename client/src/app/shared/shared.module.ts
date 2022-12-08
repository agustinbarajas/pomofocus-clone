import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightButtonComponent } from './components/light-button/light-button.component';
import { TabsContainerComponent } from './components/tabs-container/tabs-container.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [LightButtonComponent, TabsContainerComponent, TimerComponent],
  imports: [CommonModule],
  exports: [LightButtonComponent, TabsContainerComponent, TimerComponent],
})
export class SharedModule {}
