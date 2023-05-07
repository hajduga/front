import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {JwtService} from "../service/jwt.service";

@Injectable()
export class AuthorizeGuard implements CanActivate {

  constructor(
    private jwtService: JwtService,
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.jwtService.isLoggedIn()) {
      this.router.navigate(["/login"]).then(r => r.valueOf());
    }
    return true;
  }

}
