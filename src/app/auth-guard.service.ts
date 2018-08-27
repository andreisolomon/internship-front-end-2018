import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // location.replace('login');
      location.reload();
      return false;
    }

  }

}
