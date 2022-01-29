import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxSliderComponent } from './nx-slider/nx-slider.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NxSliderComponent
  ],
  exports: [
    NxSliderComponent
  ],
})
export class SharedUiModule {}
