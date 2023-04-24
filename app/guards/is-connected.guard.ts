import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard{

  constructor(private userService: UserService, private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userService.getRole() == "USER" || this.userService.getRole() == "ADMIN" ){
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    
  }
  
}
