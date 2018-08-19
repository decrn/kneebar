import { CommentViewModule } from '../comment-view/comment-view.module';
import { CommentBoxModule } from '../comment-box/comment-box.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { AppCommonModule } from '../../app-common.module';
import { ItemShelfModule } from '../item-shelf/item-shelf.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';


const routes = [
  { path: '', component: DetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppCommonModule,
    ItemShelfModule,
    MatChipsModule,
    CommentBoxModule,
    MatDividerModule,
    CommentViewModule
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
