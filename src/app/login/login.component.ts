import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    const staticUsername = 'testuser';
    const staticPassword = 'password';

    if (this.username === staticUsername && this.password === staticPassword) {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
