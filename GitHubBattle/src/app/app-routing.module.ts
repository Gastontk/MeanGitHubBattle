import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RankingComponent } from './ranking/ranking.component'

const routes: Routes = [
  {
    path: '',
    children: [],
    component: LandingComponent
  },
  {
    path: 'ranking',
    children: [],
    component: RankingComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
