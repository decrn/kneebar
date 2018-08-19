import { DataService } from '../../providers/data.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.less']
})
export class LoginRegisterComponent implements OnInit {

  loginform: FormGroup;
  registerform: FormGroup;

  constructor(
    @Inject('DataService') public ds: DataService,
    public router: Router,
    public route: ActivatedRoute,
    public fb: FormBuilder,
  ) { }

  ngOnInit() {

    // all forms have required validation defined in template
    this.loginform = this.fb.group({
      username: '',
      password: '',
    });

    this.registerform = this.fb.group({
      username: '',
      email: ['', Validators.email],
      passwords: this.fb.group(
        {
          password: ['', Validators.minLength(8)],
          password2: '',
        },
        { validator: this.passwordsEqual }
      )
    });
  }

  login() {
    if (this.loginform.valid) {
      this.ds.sendLogin(
        this.loginform.value['username'],
        this.loginform.value['password'],
      ).subscribe((status) => {
          if (status.success) {
            let redirect = this.route.snapshot.queryParams['redirect'] || '/account';
            this.router.navigate([redirect]);
          } else {
            this.loginform.get('password').setErrors({credentials: status.errorMessage});
          }
        });

      } else {
        this.markAllAsTouched(this.loginform);
      }
    }

    register() {
      if (this.registerform.valid) {
        console.log(this.registerform.value);
        this.ds.sendRegister(
          this.registerform.value['username'],
          this.registerform.value['passwords']['password'],
        ).subscribe((status) => {
          if (status.success) {
            let redirect = this.route.snapshot.queryParams['redirect'] || '/account';
            this.router.navigate([redirect]);
          } else {
            this.registerform.get('passwords').setErrors({'generic': status.errorMessage});
          }
        });

    } else {
      this.markAllAsTouched(this.registerform);
    }
  }

  private passwordsEqual(group: FormGroup) {
    let previousVal = null;
    for (const name in group.controls) {
      if (group.controls.hasOwnProperty(name)) {
        const val = group.get(name).value;
        if (val !== previousVal && previousVal != null) {
          return { mismatch: true };
        }
        previousVal = val;
      }
    }
    return null;
  }

  private markAllAsTouched(group: FormGroup) {
    for (const inner in group.controls) {
      if (group.controls.hasOwnProperty(inner)) {
          const el = group.get(inner);
          el.markAsTouched();
          el.updateValueAndValidity(); // security measure, refresh these
          if (el instanceof FormGroup) { // recursive, for formgroups in formgroups
            this.markAllAsTouched(el);
          }
      }
    }
  }

  // check if field should show error
  isErrorVisible(control: AbstractControl, error: string) {
    return control.touched && control.errors && control.errors[error];
  }
}
