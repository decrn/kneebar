import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionListComponent } from './submission-list/submission-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SubmissionListComponent
  ],
  declarations: [SubmissionListComponent]
})
export class AppCommonModule { }
