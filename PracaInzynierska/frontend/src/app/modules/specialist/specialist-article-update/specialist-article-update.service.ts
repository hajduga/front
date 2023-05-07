import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SpecialistArticleUpdate} from './model/specialistArticleUpdate';
import {UploadResponse} from "./model/uploadResponse";

@Injectable({
  providedIn: 'root'
})
export class SpecialistArticleUpdateService {

  constructor(
    private http: HttpClient
  ) { }

  getArticle(id: number): Observable<SpecialistArticleUpdate> {
    return this.http.get<SpecialistArticleUpdate>("/api/articles/" + id)
  }

  saveArticle(id: number, value: SpecialistArticleUpdate) {
    return this.http.put<SpecialistArticleUpdate>('/api/my-articles/' + id, value)
  }

  uploadImage(formData: FormData): Observable<UploadResponse> {
    return this.http.post<UploadResponse>('/api/my-articles/upload-image', formData);
  }

  getImage(imageName: string): Observable<Blob>{
    return this.http.get<Blob>('/api/api/data/articleImages/' + imageName);
  }
}
