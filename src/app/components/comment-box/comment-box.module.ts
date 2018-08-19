import { AppCommonModule } from '../../app-common.module';
import { NgModule } from '@angular/core';
import { CommentBoxComponent } from './comment-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    AppCommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [CommentBoxComponent],
  exports: [CommentBoxComponent]
})
export class CommentBoxModule { }
