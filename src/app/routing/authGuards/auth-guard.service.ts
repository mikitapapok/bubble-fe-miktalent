import {Injectable} from "@angular/core";
import {AuthService} from "./authService";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthGuardService implements CanActivate{
  email?:string;
  password?: string;
  constructor( private auth: AuthService,private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     this.auth.isActivate().subscribe({next: (value=> {
        this.email=value.email
        this.password=value.password
      })})
      if(!this.email?.length && !this.password?.length){

        this.router.navigate(['/login'])
      }
      return true

  }
}
