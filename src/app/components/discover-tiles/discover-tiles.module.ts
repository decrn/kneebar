import { NgModule } from '@angular/core';
import { DiscoverTilesComponent } from './discover-tiles.component';
import { AppCommonModule } from '../../app-common.module';

@NgModule({
  imports: [
    AppCommonModule
  ],
  declarations: [DiscoverTilesComponent],
  exports: [DiscoverTilesComponent]
})
export class DiscoverTilesModule { }
