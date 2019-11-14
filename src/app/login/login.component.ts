import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/Auth.service';
import { UserLogin } from '../_Models/UserLogin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: UserLogin = {Email: '', Password: '' };
  errorDisplay = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.user).subscribe(next => {
      this.router.navigate(['home/tarefas']);
    }, error => {
      this.errorDisplay = error;
    });
  }
  loggedIn() {
    return this.authService.loggedIn();
  }

}
