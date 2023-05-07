import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-user-confirm-dialog',
  templateUrl: './user-confirm-dialog.component.html',
  styleUrls: ['./user-confirm-dialog.component.scss']
})
export class UserConfirmDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
