import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficoComponent } from './grafico.component';

import { IonicModule } from '@ionic/angular';

import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    GraficoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PlotlyModule,
  ],
  exports: [
    GraficoComponent
  ]
})
export class GraficoModule { }
