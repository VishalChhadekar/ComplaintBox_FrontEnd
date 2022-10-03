import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("IsAuthorized: " + this.isAuthorized(route));
    return this.isAuthorized(route);
  }

  //If: role matched from any of expectedRoles, then isAuthorized should return true, else false.
  // private isAuthorized(route: ActivatedRouteSnapshot): boolean {

  //   const getRole = this.authService.getRole();
  //   //here you are getting one role
  //   const expectedRoles = route.data['expectedRoles'];
  //   let roleMached: boolean;
  //   for (let role of expectedRoles) {
  //     console.log("Role from array of expecteRoles: " + role);

  //     if (role == getRole) {
  //       console.log("Returning ture: " + role);
  //       roleMached = true;
  //     }
  //     else {
  //       roleMached = false;
  //     }
  //   }
  //   return false;
  // }
  // canActivate() {
  //   console.log("Getting HaveAccess in roleGuard: "+this.authService.HaveAccess());//returning: false
  //   if (this.authService.HaveAccess()) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  isAuthorized(route: ActivatedRouteSnapshot): boolean {
    if (this.authService.isLoggedIn()) {

      const userRole = this.authService.getRole();
      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        this.router.navigate(['/home']);
        return false;
      }
      return true;

    }

    this.router.navigate(['/home']);
    return false;
  }

}
