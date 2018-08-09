import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsOverviewComponent } from './submissions-overview.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { AppCommonModule } from '../../app-common.module';

const routes = [
  { path: '', component: SubmissionsOverviewComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppCommonModule
  ],
  declarations: [SubmissionsOverviewComponent]
})
export class SubmissionsOverviewModule { }
