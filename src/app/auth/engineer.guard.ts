import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EngineerGuard implements CanActivate {
  constructor(private authService: AuthService) {

  }
  canActivate() {
    let currentRole: String = this.authService.getRole();
    if (this.authService.isLoggedIn() && currentRole == 'engineer') {
      return true;
    } else {
      return false;
    }
  }
  
}
