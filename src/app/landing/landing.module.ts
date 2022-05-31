import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FooterComponent } from './Footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    LandingComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
