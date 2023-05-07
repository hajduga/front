import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpecialistArticleUpdate } from '../specialist-article-update/model/specialistArticleUpdate';

@Injectable({
  providedIn: 'root'
})
export class SpecialistArticleAddService {

  constructor(
    private http: HttpClient
  ) { }

  saveNewArticle(article: SpecialistArticleUpdate): Observable<SpecialistArticleUpdate> {
    console.log(article);
    return this.http.post<SpecialistArticleUpdate>(`/api/my-articles`, article);
  }
}
