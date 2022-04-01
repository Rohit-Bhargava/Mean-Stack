import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";


interface Role {
  value: string;
  viewValue: string;
}

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {

 

  siginupForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    name: new FormControl(null,[Validators.minLength(3)]),
    tel: new FormControl(null, [Validators.minLength(10)]),
    role: new FormControl(null, [Validators.required]),
    password: new FormControl(null, Validators.required),
  })
  constructor(public authService: AuthService, public router: Router) {}

roles: Role[] = [
  { value: 'admin', viewValue: 'Admin' },
  { value: 'manager', viewValue: 'Manager' },
  { value: 'user', viewValue: 'User' },
];

  onSignup(form) {
    if (form.invalid) {
      return;
    }
    
    this.authService.createUser( form.value.email, form.value.password, form.value.name, 
      form.value.tel, form.value.role);
    this.router.navigate(['/login']);
  }
}
