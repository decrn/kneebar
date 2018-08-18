import { NgModule } from '@angular/core';
import { ItemShelfComponent } from './item-shelf.component';
import { AppCommonModule } from '../../app-common.module';
import { MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    AppCommonModule,
    MatCardModule
  ],
  declarations: [ItemShelfComponent],
  exports: [ItemShelfComponent]
})
export class ItemShelfModule { }
