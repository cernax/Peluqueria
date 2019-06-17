import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { HomeComponent } from './home/home.component';

const Routes: Routes = [  
  { path: 'calendario', component: CalendarioComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', component: HomeComponent },
];
export const routableComponents = [
  CalendarioComponent
];

@NgModule({
  imports: [RouterModule.forRoot(Routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
