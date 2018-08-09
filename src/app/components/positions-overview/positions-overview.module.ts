import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionsOverviewComponent } from './positions-overview.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { AppCommonModule } from '../../app-common.module';

const routes = [
  { path: '', component: PositionsOverviewComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppCommonModule
  ],
  declarations: [PositionsOverviewComponent]
})
export class PositionsOverviewModule { }
