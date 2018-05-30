import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubmissionDetailComponent } from './submission-detail/submission-detail.component';
import { SubmissionOverviewComponent } from './submission-overview/submission-overview.component';
import { AppCommonModule } from '../app-common/app-common.module';

const routes = [
  { path: '', component: SubmissionOverviewComponent },
  { path: ':id', component: SubmissionDetailComponent } // TODO: add resolver
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AppCommonModule
  ],
  declarations: [SubmissionDetailComponent, SubmissionOverviewComponent]
})
export class SubmissionsModule { }
