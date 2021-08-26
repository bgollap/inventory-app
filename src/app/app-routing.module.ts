import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowResultsComponent } from './show-results/show-results.component';

const routes: Routes = [
  {path:'showresults', component:ShowResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
