import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemShelfComponent } from './item-shelf.component';
import { AppCommonModule } from '../../app-common.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    AppCommonModule
  ],
  declarations: [ItemShelfComponent],
  exports: [ItemShelfComponent]
})
export class ItemShelfModule { }
