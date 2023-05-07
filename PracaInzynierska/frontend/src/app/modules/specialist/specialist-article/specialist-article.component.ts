import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { map, startWith, switchMap} from 'rxjs';
import { SpecialistArticle } from '../model/spacialistArticle';
import { SpecialistConfirmDialogService } from '../specialist-confirm-dialog/specialist-confirm-dialog.service';
import { SpecialistArticleService } from './specialist-article.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-specialist-article',
  templateUrl: './specialist-article.component.html',
  styleUrls: ['./specialist-article.component.scss']
})
export class SpecialistArticleComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ["id", "title", "actions"];
  totalElements: number = 0;
  data: SpecialistArticle[] = [];

  constructor(
    private specialistArticleService: SpecialistArticleService,
    private dialogService: SpecialistConfirmDialogService
  ) { }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.specialistArticleService.getArticles(this.paginator.pageIndex, this.paginator.pageSize);
      }),
      map(data => {
        this.totalElements = data.totalElements;
        return data.content;
      })
    ).subscribe(data => this.data = data);
  }

  confirmDelete(element: SpecialistArticle) {
    this.dialogService.openConfirmDialog("Czy na pewno chcesz usunąć ten artykuł?")
    .afterClosed()
    .subscribe(result => {
      if(result) {
        this.specialistArticleService.delete(element.id)
        .subscribe(() => {
            this.data.forEach((value, index) => {
              if(element == value) {
                this.data.splice(index, 1);
                this.table.renderRows();
              }
            })
        });
      }
    });
  }

}
