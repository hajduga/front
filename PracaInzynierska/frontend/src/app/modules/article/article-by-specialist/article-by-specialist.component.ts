import { Component } from '@angular/core';
import {Page} from "../../common/model/page";
import {Article} from "../model/article";
import {PageEvent} from "@angular/material/paginator";
import {ArticleBySpecialistService} from "./article-by-specialist.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-by-specialist',
  templateUrl: './article-by-specialist.component.html',
  styleUrls: ['./article-by-specialist.component.scss']
})
export class ArticleBySpecialistComponent {

  page!: Page<Article>;

  constructor(
    private articleBySpecialistService: ArticleBySpecialistService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.getArticlePage(0, 10);
  }
  onPageEvent(event: PageEvent){
    this.getArticlePage(event.pageIndex,event.pageSize);
  }

  private getArticlePage(page: number, size: number) {
    let id = this.route.snapshot.params['id'];
    this.articleBySpecialistService.getArticles(id, page, size)
      .subscribe(page => this.page = page);
  }



}
