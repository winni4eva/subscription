import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { State, Store } from '@ngrx/store';
import { AppState } from '../../@store/models/app-state.model';
import { Observable, Subscription } from 'rxjs';
import { AuthModel } from 'src/app/@store/models/auth.model';
import { LoadingAuthAction } from '../../@store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  credentials$!: Observable<AuthModel>;
  loading$!: Observable<Boolean>;
  error$!: Observable<Error>;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    //private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  submitForm() {
    const credentials = this.loginForm.value;
    this._authService.login(credentials)
      .subscribe(
        (response: any) => localStorage.setItem('AuthToken', response?.authToken),
        error => console.error(error)
      );
    //this.store.dispatch(new LoadingAuthAction(this.loginForm.value));
    //this._authService.login();
  }

  initialiseAssets() {
    // this.credentials$ = this.store.select(store => store.auth.credentials);
    // this.loading$ = this.store.select(store => store.auth.loading);
    // this.error$ = this.store.select(store => store.auth.error);
  }

}
