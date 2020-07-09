import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "line-chart",
    component: LineChartComponent
  },
  {
    path:"pie-chart",
    component: PieChartComponent
  },
  {
    path: "bar-chart",
    component: BarChartComponent
  },
  {
    path: "bubble-chart",
    component: BubbleChartComponent
  },
  {
    path: "polar-area-chart",
    component: PolarAreaChartComponent
  },
  {
    path: "radar-chart",
    component: RadarChartComponent
  },
  {
    path: "scatter-chart",
    component: ScatterChartComponent
  },
  {
    path: "donut-chart",
    component: DonutChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
