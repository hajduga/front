import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/modules/common/model/page';
import { UserDto } from '../../common/model/userDto';
import {SpecialistDto} from "../model/specialistDto";

@Injectable({
  providedIn: 'root'
})
export class SpecialistListService {

  constructor(
    private http: HttpClient
  ) { }

  getSpecialists(page: number, size: number): Observable<Page<SpecialistDto>> {
    return this.http.get<Page<SpecialistDto>>(`/api/users/specialists?page=${page}&size=${size}`);
  }
}
