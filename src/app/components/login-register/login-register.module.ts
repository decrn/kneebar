import { AppCommonModule } from '../../app-common.module';
import { NgModule } from '@angular/core';
import { LoginRegisterComponent } from './login-register.component';

@NgModule({
  imports: [
    AppCommonModule
  ],
  declarations: [LoginRegisterComponent]
})
export class LoginRegisterModule { }
