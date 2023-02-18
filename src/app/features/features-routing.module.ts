import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'full-screen',
    component: ShowDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
