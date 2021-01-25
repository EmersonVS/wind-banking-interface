import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteDivComponent } from './white-div.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WhiteDivComponent
  ],
  exports: [
    WhiteDivComponent
  ]
})
export class WhiteDivModule { }
