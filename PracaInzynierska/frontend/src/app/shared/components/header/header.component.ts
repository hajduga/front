import { Component } from '@angular/core';
import {JwtService} from "../../../modules/common/service/jwt.service";
import {LogoutService} from "../../../modules/common/service/logout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title = "Fizjoterapia";
  private readonly REDIRECT_ROUTE = "/login";

  constructor(
    private jwtService: JwtService,
    private logoutService: LogoutService,
    private router: Router
  ) { }

  isLoggedIn(): boolean{
    return this.jwtService.isLoggedIn();
  }

  logout() {
    this.logoutService.logout().subscribe(response => {
      this.jwtService.logout();
      this.router.navigate([this.REDIRECT_ROUTE]);
    })
  }

}
