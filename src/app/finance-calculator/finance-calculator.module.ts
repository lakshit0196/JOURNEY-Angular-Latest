import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceCalculatorRoutingModule } from './finance-calculator-routing.module';
import { FinanceCalculatorComponent } from './finance-calculator.component';


@NgModule({
  declarations: [
    FinanceCalculatorComponent
  ],
  imports: [
    CommonModule,
    FinanceCalculatorRoutingModule
  ]
})
export class FinanceCalculatorModule { }
