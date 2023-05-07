import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-specialist-confirm-dialog',
  templateUrl: './specialist-confirm-dialog.component.html',
  styleUrls: ['./specialist-confirm-dialog.component.scss']
})
export class SpecialistConfirmDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
