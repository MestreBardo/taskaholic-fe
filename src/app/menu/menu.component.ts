import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  outerMenu = true;
  constructor(private router: Router) { }

  ngOnInit() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    const decodedToken = jwtHelper.decodeToken(token);
    if (decodedToken.role !== 'admin') {
      this.outerMenu = false;
    }
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
