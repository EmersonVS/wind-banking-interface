import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContaWindComponent } from './components/conta-wind/conta-wind.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { PixComponent } from './components/pix/pix.component';
import { CpfInputCardModule } from 'src/app/shared/modules/cpf-input-card/cpf-input-card.module';
import { WhiteDivModule } from 'src/app/shared/modules/white-div/white-div.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    CpfInputCardModule,
    WhiteDivModule,
    RouterModule
  ],
  declarations: [
    WelcomeComponent,
    InicioComponent,
    ContaWindComponent,
    SobreNosComponent,
    PixComponent
  ],
  exports:[
    WelcomeComponent
  ]
})
export class WelcomeModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowRight)
  }
 }
