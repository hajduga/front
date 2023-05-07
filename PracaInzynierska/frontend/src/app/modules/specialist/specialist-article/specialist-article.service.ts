import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from 'src/app/modules/common/model/page';
import {SpecialistArticle} from '../model/spacialistArticle';

@Injectable({
  providedIn: 'root'
})
export class SpecialistArticleService {

  constructor(
    private http: HttpClient
  ) {
  }

  getArticles(page: number, size: number): Observable<Page<SpecialistArticle>> {
    return this.http.get<Page<SpecialistArticle>>(`/api/my-articles?page=${page}&size=${size}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>('/api/my-articles/' + id);
  }
}
