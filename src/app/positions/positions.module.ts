import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionsOverviewComponent } from './positions-overview/positions-overview.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '', component: PositionsOverviewComponent },
  // { path: ':id', component: SubmissionDetailComponent } // TODO: add resolver
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PositionsOverviewComponent]
})
export class PositionsModule { }
