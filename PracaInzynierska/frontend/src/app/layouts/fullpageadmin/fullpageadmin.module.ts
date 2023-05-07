import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import {AdminUsersComponent} from "../../modules/admin/admin-users/admin-users.component";
import {AdminConfirmDialogComponent} from "../../modules/admin/admin-confirm-dialog/admin-confirm-dialog.component";
import {AdminRequestsComponent} from "../../modules/admin/admin-requests/admin-requests.component";



@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminUsersComponent,
    AdminConfirmDialogComponent,
    AdminRequestsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class FullpageadminModule { }
