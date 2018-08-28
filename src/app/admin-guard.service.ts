import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AdminGuardService implements CanActivate {

  private isAdmin: boolean;

  constructor(private userService: UserService, private router: Router) {  }

  canActivate() {
    return this.checkAdmin();
  }

  checkAdmin() {
    return this.userService.getAdmin().map(data => {
      this.isAdmin = data;
      if (this.isAdmin) {
        return true;
      } else {
        this.router.navigate(['dashboard']);
        return false;
      }
    });
  }

}
