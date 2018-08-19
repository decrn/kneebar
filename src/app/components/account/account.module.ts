import { AppCommonModule } from '../../app-common.module';
import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    AppCommonModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
