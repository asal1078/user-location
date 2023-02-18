import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { ShareModule } from '../share/share.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    LandingComponent,
    ShowDetailsComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ShareModule,
    CoreModule,
    NgSelectModule, 
    FormsModule,
  ]
})
export class FeaturesModule { }
