import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

import {RoleChangeConfirmDialogComponent} from "./role-change-confirm-dialog.component";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RoleChangeConfirmDialogService {

  constructor(
    private dialog: MatDialog
  ) {
  }

  openConfirmDialog(formGroup: FormGroup): MatDialogRef<RoleChangeConfirmDialogComponent, Boolean> {
    return this.dialog.open(RoleChangeConfirmDialogComponent, {
      width: '400px',
      data: {
        formGroup: formGroup
      },

    });
  }
}
