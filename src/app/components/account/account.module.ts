import { CommentViewModule } from '../comment-view/comment-view.module';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from '../../app-common.module';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';

const routes = [
  { path: '', component: AccountComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppCommonModule,
    CommentViewModule,
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
