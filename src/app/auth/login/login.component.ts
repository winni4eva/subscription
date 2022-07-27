import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm() {
    this.loginForm = this._fb.group({
      email: [''],
      password: [''],
    });
  }

  submitForm() {
    console.log(this.loginForm.value);
  }

}
