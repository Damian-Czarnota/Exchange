import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExchangeRateComponent} from "./containers/exchange-rate/exchange-rate.component";

const routes: Routes = [
  {pathMatch: 'full', path:'app', component: ExchangeRateComponent },
  { path: '**', redirectTo: 'app' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
