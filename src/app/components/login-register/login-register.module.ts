import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppCommonModule } from '../../app-common.module';
import { NgModule } from '@angular/core';
import { LoginRegisterComponent } from './login-register.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const routes = [
  { path: '', component: LoginRegisterComponent }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AppCommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [LoginRegisterComponent],
  providers: [FormBuilder]
})
export class LoginRegisterModule { }
