import {Component} from '@angular/core';
import {UserDto} from "../../common/model/userDto";
import {FormBuilder} from "@angular/forms";
import {UserService} from "../../user/user.service";
import {UserConfirmDialogService} from "../../user/user-confirm-dialog/user-confirm-dialog.service";
import {RoleChangeConfirmDialogService} from "../../user/role-change-confirm-dialog/role-change-confirm-dialog.service";

@Component({
  selector: 'app-specialist-profile',
  templateUrl: './specialist-profile.component.html',
  styleUrls: ['./specialist-profile.component.scss']
})
export class SpecialistProfileComponent {

  user!: UserDto;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private dialogService: UserConfirmDialogService
  ) {

  }

  ngOnInit() {
    this.getCurrentUserDetails();
  }

  getCurrentUserDetails() {
    this.userService.getCurrentUserDetails()
      .subscribe(user => this.user = user);
  }

  confirmDelete(user: UserDto) {
    this.dialogService.openConfirmDialog("Czy na pewno chcesz usunąć konto?")
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.userService.delete(user.id).subscribe();
        }
      });
  }

}
