import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {UserDto} from "../../common/model/userDto";
import {MatPaginator} from "@angular/material/paginator";
import {MatTable} from "@angular/material/table";
import {UserService} from "../../user/user.service";
import {AdminConfirmDialogService} from "../admin-confirm-dialog/admin-confirm-dialog.service";
import {map, startWith, switchMap} from "rxjs";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  displayedColumns: string[] = ["id", "username", "role", "actions"];
  totalElements: number = 0;
  data: UserDto[] = [];

  constructor(
    private userService: UserService,
    private dialogService: AdminConfirmDialogService
  ) { }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.userService.getUsersByRole(this.paginator.pageIndex, this.paginator.pageSize);
      })
    ).subscribe(data => {
      this.totalElements = data.totalElements;
      this.data = data.content;
    });
  }


  confirmDelete(element: UserDto) {
    this.dialogService.openConfirmDialog("Czy na pewno chcesz usunąć konto tego użytkownika?")
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.userService.delete(element.id)
            .subscribe(() => {
              this.data.forEach((value, index) => {
                if (element == value) {
                  this.data.splice(index, 1);
                  this.table.renderRows();
                }
              })
            });
        }
      });
  }


}
