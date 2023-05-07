import {Component} from '@angular/core';
import {UserDto} from '../common/model/userDto';
import {UserService} from '../user/user.service';
import {UserConfirmDialogService} from "../user/user-confirm-dialog/user-confirm-dialog.service";
import {RoleChangeConfirmDialogService} from "../user/role-change-confirm-dialog/role-change-confirm-dialog.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {JwtService} from "../common/service/jwt.service";
import {LogoutService} from "../common/service/logout.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  roleChangeForm!: FormGroup;
  user!: UserDto;
  private readonly REDIRECT_ROUTE = "/login";

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogService: UserConfirmDialogService,
    private roleChangeDialogService: RoleChangeConfirmDialogService,
    private router: Router,
    private jwtService: JwtService,
    private logoutService: LogoutService
  ) {
  }

  ngOnInit() {
    this.getCurrentUserDetails();
    this.roleChangeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  getCurrentUserDetails() {
    this.userService.getCurrentUserDetails()
      .subscribe(user => {
        return this.user = user;
      });
  }

  confirmDelete(user: UserDto) {
    this.dialogService.openConfirmDialog("Czy na pewno chcesz usunąć konto?")
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.logout();
          this.userService.delete(user.id).subscribe();
        }
      });
  }

  openDialog(roleChangeForm: FormGroup) {
    this.roleChangeDialogService.openConfirmDialog(roleChangeForm)
      .afterClosed().subscribe(result => {
      if (result) {
        this.userService.requestSpecialistAccount(roleChangeForm.value).subscribe();
        this.user.specialistStatus = true;
      }
    });
  }

  isRequestedSpecialist(): boolean {
    return this.userService.isRequestedSpecialist(this.user);
  }

  isUser(): boolean {
    return this.userService.isUser(this.user);
  }

  isSpecialist(): boolean{
    return this.userService.isSpecialist(this.user);
  }

  logout() {
    this.logoutService.logout().subscribe(response => {
      this.jwtService.logout();
      this.router.navigate([this.REDIRECT_ROUTE]);
    })
  }
}
