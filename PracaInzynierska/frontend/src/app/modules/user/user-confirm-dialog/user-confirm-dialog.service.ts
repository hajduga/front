import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {UserConfirmDialogComponent} from "./user-confirm-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class UserConfirmDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openConfirmDialog(message: string): MatDialogRef<UserConfirmDialogComponent, Boolean>{
    return this.dialog.open(UserConfirmDialogComponent, {
      width: '400px',
      data: {
        message: message
      }
    });
  }
}
