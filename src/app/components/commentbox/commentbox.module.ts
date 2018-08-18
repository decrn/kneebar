import { AppCommonModule } from '../../app-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentboxComponent } from './commentbox.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    AppCommonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [CommentboxComponent],
  exports: [CommentboxComponent]
})
export class CommentboxModule { }
