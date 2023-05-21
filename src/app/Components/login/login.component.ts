import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup
  logined = false;

  constructor(
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  Onlogin() {
    this.logined = true;

    if (this.loginForm.valid) {
      console.log('valid data ', this.loginForm.value);

      let data = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        service: 'advance'
      }
    }

  }
}
