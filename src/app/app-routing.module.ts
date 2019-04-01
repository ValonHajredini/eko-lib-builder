import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibsComponent} from './libs/libs.component';

const routes: Routes = [
  {path: '', component: LibsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
