import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Page } from 'src/app/modules/common/model/page';
import { ArticleService } from './article.service';
import { Article } from './model/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  page!: Page<Article>;

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.getArticlePage(0, 10);
  }

  onPageEvent(event: PageEvent){
    this.getArticlePage(event.pageIndex, event.pageSize);
  }

  private getArticlePage(page: number, size: number) {
    this.articleService.getArticles(page, size)
      .subscribe(page => {
        return this.page = page;
      });
  }



}
