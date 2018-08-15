import { NgModule } from '@angular/core';
import { ItemShelfComponent } from './item-shelf.component';
import { AppCommonModule } from '../../app-common.module';

@NgModule({
  imports: [
    AppCommonModule
  ],
  declarations: [ItemShelfComponent],
  exports: [ItemShelfComponent]
})
export class ItemShelfModule { }
