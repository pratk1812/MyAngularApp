import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userForm: FormGroup;
  submitted = false;
  users: User[] = [];

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }

  
  onSubmit() {
    this.submitted = true;

    if (this.userForm.valid) {
       const newUser: User = {
        firstName: this.formControls['firstName'].value,
        lastName: this.formControls['lastName'].value,
        mobileNumber: this.formControls['mobileNumber'].value,
        email: this.formControls['email'].value
      };
      this.users.push(newUser);
      this.userForm.reset();
      this.submitted = false;
    }
  }
}

interface User {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
}
