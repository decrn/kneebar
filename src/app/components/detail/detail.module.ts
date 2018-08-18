import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { AppCommonModule } from '../../app-common.module';
import { ItemShelfModule } from '../item-shelf/item-shelf.module';
import { MatChipsModule } from '@angular/material/chips';

const routes = [
  { path: '', component: DetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppCommonModule,
    ItemShelfModule,
    MatChipsModule
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
