import { AppCommonModule } from '../../app-common.module';
import { NgModule } from '@angular/core';
import { CommentViewComponent } from './comment-view.component';
import { NgPipesModule } from '../../../../node_modules/ngx-pipes';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  imports: [
    AppCommonModule,
    NgPipesModule,
    MatSelectModule,
  ],
  declarations: [CommentViewComponent],
  exports: [
    CommentViewComponent
  ]
})
export class CommentViewModule { }
