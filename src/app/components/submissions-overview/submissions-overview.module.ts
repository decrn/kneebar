import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionsOverviewComponent } from './submissions-overview.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { AppCommonModule } from '../../app-common.module';
import { NgPipesModule } from '../../../../node_modules/ngx-pipes';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


const routes = [
  { path: '', component: SubmissionsOverviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppCommonModule,
    NgPipesModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: [SubmissionsOverviewComponent],
  exports: []
})
export class SubmissionsOverviewModule { }
