import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    img {
      max-width: 200px;
    }
    section {
      max-width: 500px;
      margin: 0 auto;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  authError: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private loginServie: LoginService) {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: [ '', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  login(): void {
    this.authError = false;
    const formModel = this.loginForm.value;

    this.loginServie.login(formModel.email, formModel.password)
      .subscribe( isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigate(['/home']);
          return;
        }
    
        this.authError = true;
      });

  }
}
