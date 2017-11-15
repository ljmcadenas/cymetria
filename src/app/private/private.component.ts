import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  templateUrl: './private.component.html',
  styles: [`
    h1 {
      margin-left: 20px;
    }

    header img {
      max-width: 150px;
    }

    .dropdown-menu a {
      cursor: pointer;
    }

    main {
      margin: 15px 50px;
    }
  `]
})
export class PrivateComponent {

  constructor(private router: Router, private loginService: LoginService) { }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
