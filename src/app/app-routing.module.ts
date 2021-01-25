import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './feature/account/account.component';
import { AccountModule } from './feature/account/account.module';
import { DemoComponent } from './feature/account/demo/demo.component';
import { WelcomeComponent } from './feature/welcome/welcome.component';
import { NotFoundPageComponent } from './shared/modules/not-found-page/not-found-page.component';


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
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
