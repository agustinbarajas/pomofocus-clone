import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightButtonComponent } from './components/light-button/light-button.component';
import { TabsContainerComponent } from './components/tabs-container/tabs-container.component';

@NgModule({
  declarations: [
    LightButtonComponent,
    TabsContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LightButtonComponent,
    TabsContainerComponent
  ]
})
export class SharedModule { }
