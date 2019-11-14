import { Component } from '@angular/core';
import { AuthService } from './_services/Auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {

  }
  title = 'taskaholic-fe';
  loggedIn() {
    return this.authService.loggedIn();
  }
}
