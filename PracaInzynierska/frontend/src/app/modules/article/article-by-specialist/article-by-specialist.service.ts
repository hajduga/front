import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../../common/model/page";
import {Article} from "../model/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleBySpecialistService {

  constructor( private http: HttpClient) { }
  getArticles(id: number, page: number, size: number): Observable<Page<Article>> {
    return this.http.get<Page<Article>>(`/api/specialists/${id}/articles?page=${page}&size=${size}`);
  }
}
