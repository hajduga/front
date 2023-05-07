import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {UserDto} from "../../common/model/userDto";
import {UserService} from "../user.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-role-change-confirm-dialog',
  templateUrl: './role-change-confirm-dialog.component.html',
  styleUrls: ['./role-change-confirm-dialog.component.scss']
})
export class RoleChangeConfirmDialogComponent implements OnInit{

  user!: UserDto;
  parentForm!: FormGroup

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.parentForm = this.data.formGroup;
  }



}
