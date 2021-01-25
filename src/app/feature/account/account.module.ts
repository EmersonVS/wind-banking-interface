import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { DemoComponent } from './demo/demo.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CellphoneCardModule } from 'src/app/shared/modules/cellphone-card/cellphone-card.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    CellphoneCardModule
  ],
  declarations: [
    AccountComponent,
    DemoComponent
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }
