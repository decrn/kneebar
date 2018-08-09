import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsOverviewComponent } from './submissions-overview.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { AppCommonModule } from '../../app-common.module';
import { NgPipesModule } from '../../../../node_modules/ngx-pipes';
import { FormsModule } from '../../../../node_modules/@angular/forms';

const routes = [
  { path: '', component: SubmissionsOverviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppCommonModule,
    NgPipesModule
  ],
  declarations: [SubmissionsOverviewComponent],
  exports: []
})
export class SubmissionsOverviewModule { }
