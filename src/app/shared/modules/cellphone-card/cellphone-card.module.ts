import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellphoneCardComponent } from './cellphone-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CellphoneCardContentComponent } from './cellphone-card-content/cellphone-card-content.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    CellphoneCardComponent,
    CellphoneCardContentComponent
  ],
  exports: [
    CellphoneCardComponent
  ]
})

export class CellphoneCardModule {

}
