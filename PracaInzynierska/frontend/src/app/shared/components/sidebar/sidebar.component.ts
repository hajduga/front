import {Component} from '@angular/core';
import {JwtService} from "../../../modules/common/service/jwt.service";
import {LogoutService} from "../../../modules/common/service/logout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  private readonly REDIRECT_ROUTE = "/admin/login";


  constructor(private jwtService: JwtService,
              private logoutService: LogoutService,
              private router: Router
  ) {
  }


  logout() {
    this.logoutService.logout().subscribe(response => {
      this.jwtService.logout();
      this.router.navigate([this.REDIRECT_ROUTE]);
    })

  }
}
