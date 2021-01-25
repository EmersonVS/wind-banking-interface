import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './feature/account/account.component';
import { DemoComponent } from './feature/account/demo/demo.component';
import { WelcomeComponent } from './feature/welcome/welcome.component';


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'account',
    children: [
      {
        path: '',
        component: AccountComponent
      },
      {
        path: 'demo',
        component: DemoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
