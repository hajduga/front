import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {
  SpecialistConfirmDialogComponent
} from "../../specialist/specialist-confirm-dialog/specialist-confirm-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class AdminConfirmDialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  openConfirmDialog(message: string): MatDialogRef<SpecialistConfirmDialogComponent, Boolean>{
    return this.dialog.open(SpecialistConfirmDialogComponent, {
      width: '400px',
      data: {
        message: message
      }
    });
  }
}
