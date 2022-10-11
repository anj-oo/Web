import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class StudentGuardService implements CanActivate{
    constructor(private authService: AuthService, private router: Router){}
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.authService.isAuthenticate()) {
            return true;
        } else {
            this.router.navigate(['Home']);
            return true;
       }
        throw new Error("Method not implemented.");
    }
    
}