import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleDetails } from './model/articleDetails';
import {Comment} from "./model/comment";

@Injectable({
  providedIn: 'root'
})
export class ArticleDetailsService {

  constructor(private http: HttpClient) { }

  getArticleDetails(slug: string): Observable<ArticleDetails>{
    return this.http.get<ArticleDetails>("/api/articles/" + slug);
  }

  getComments(articleId: number): Observable<Comment>{
    return this.http.get<Comment>("/api/comments/" + articleId);
  }

  saveArticleComment(comment: Comment): Observable<Comment>{
    console.log(comment);
    return this.http.post<Comment>("/api/comments", comment);
  }
}
