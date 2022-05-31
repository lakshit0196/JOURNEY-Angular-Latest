import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FavoritesComponent } from './dashboard/favorites/favorites.component';
import { CompareVehiclesComponent } from './dashboard/compare-vehicles/compare-vehicles.component';
import { TradeInComponent } from './dashboard/trade-in/trade-in.component';


@NgModule({
  declarations: [
    FavoritesComponent,
    CompareVehiclesComponent,
    TradeInComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
