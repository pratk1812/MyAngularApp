import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  message: string = '';
  submitted: boolean = false;

  onSubmit(){
    this.submitted=true;
    console.log('loginform: ' + this.loginForm.valid);
    console.log('username: ' + this.loginForm.get('username')?.value + '  password: ' + this.loginForm.get('password')?.value);
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      if (username === 'admin' && password === 'admin') {
        this.message = 'Success';
      } else {
        this.message = 'Failure';
      }
    }
  }
}