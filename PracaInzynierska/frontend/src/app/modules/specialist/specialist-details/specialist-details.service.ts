import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SpecialistDto} from "../model/specialistDto";

@Injectable({
  providedIn: 'root'
})
export class SpecialistDetailsService {

  constructor(private http: HttpClient) { }

  getSpecialistDetails(id: number): Observable<SpecialistDto>{
    return this.http.get<SpecialistDto>("/api/users/specialists/" + id);
  }

}
