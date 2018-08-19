import { AppCommonModule } from '../../app-common.module';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    AppCommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  declarations: [NavComponent],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
