import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionsOverviewComponent } from './positions-overview.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { AppCommonModule } from '../../app-common.module';
import { ItemShelfModule } from '../item-shelf/item-shelf.module';
import { MatCardModule} from '@angular/material/card';

const routes = [
  { path: '**', component: PositionsOverviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppCommonModule,
    MatCardModule,
  ],
  declarations: [PositionsOverviewComponent]
})
export class PositionsOverviewModule { }
