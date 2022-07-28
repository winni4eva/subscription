import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { State, Store } from '@ngrx/store';
import { AppState } from '../../@store/models/app-state.model';
import { Observable, Subscription } from 'rxjs';
import { AuthModel } from 'src/app/@store/models/auth.model';
import { LoadingAuthAction } from '../../@store/actions/auth.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _router: Router,
    private _snackBar: MatSnackBar
    //private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm() {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.openSnackBar('Just a tick', 'Loading...');
    const credentials = this.loginForm.value;
    this._authService.login(credentials)
      .subscribe(
        (response: any) => {
          this.openSnackBar('Login Successful', 'Success');
          localStorage.setItem('AuthToken', response?.authToken);
          this._router.navigate(['admin']);
        },
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000
    });
  }

}
