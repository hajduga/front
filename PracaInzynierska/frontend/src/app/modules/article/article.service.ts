import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/modules/common/model/page';
import { Article } from './model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  getArticles(page: number, size: number): Observable<Page<Article>> {
    console.log(`/api/articles?.page=${page}&size=${size}`)
    return this.http.get<Page<Article>>(`/api/articles?page=${page}&size=${size}`);
  }
}
