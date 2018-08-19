import { AppCommonModule } from '../../app-common.module';
import { NgModule } from '@angular/core';
import { CommentViewComponent } from './comment-view.component';


@NgModule({
  imports: [
    AppCommonModule
  ],
  declarations: [CommentViewComponent],
  exports: [
    CommentViewComponent
  ]
})
export class CommentViewModule { }
