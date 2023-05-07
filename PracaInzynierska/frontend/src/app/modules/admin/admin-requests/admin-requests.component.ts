import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTable} from "@angular/material/table";
import {UserDto} from "../../common/model/userDto";
import {UserService} from "../../user/user.service";
import {AdminConfirmDialogService} from "../admin-confirm-dialog/admin-confirm-dialog.service";
import {map, startWith, switchMap} from "rxjs";

@Component({
  selector: 'app-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.scss']
})
export class AdminRequestsComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ["id", "username", "role", "actions"];
  totalElements: number = 0;
  data: UserDto[] = [];

  constructor(
    private userService: UserService,
    private dialogService: AdminConfirmDialogService
  ) {
  }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.userService.getSpecialistRequests(this.paginator.pageIndex, this.paginator.pageSize);
      }),
      map(data => {
        this.totalElements = data.totalElements;
        return data.content;
      })
    ).subscribe(data => this.data = data);
  }

  accept(element: UserDto) {
    this.userService.changeUserRoleToSpecialist(element.id)
      .subscribe(() => {
        this.data.forEach((value,index) => {
          if (element == value) {
            this.data.splice(index,1);
            this.table.renderRows();
          }
        })
      })
  }

  reject(element: UserDto) {
    this.userService.changeUserRoleToUser(element.id)
      .subscribe(() => {
        this.data.forEach((value,index) => {
          if (element == value) {
            this.data.splice(index,1);
            this.table.renderRows();
          }
        })
      })
  }


}
