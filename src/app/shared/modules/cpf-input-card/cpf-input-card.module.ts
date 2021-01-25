import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfInputCardComponent } from './cpf-input-card.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    CpfInputCardComponent
  ],
  exports: [
    CpfInputCardComponent
  ]
})
export class CpfInputCardModule { 
}
