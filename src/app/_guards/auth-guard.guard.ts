import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor( private router: Router ) {}
  canActivate( ): boolean {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');
    const decodedToken = jwtHelper.decodeToken(token);
    if (decodedToken.role === 'admin') {
      return true;
    }
    this.router.navigate(['home/tarefas']);
    return false;
  }
}
