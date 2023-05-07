import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UserDto} from '../common/model/userDto';
import {Page} from "../common/model/page";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUsers(page: number, size: number): Observable<Page<UserDto>>{
    return this.http.get<Page<UserDto>>(`/api/users?page=${page}&size=${size}`);
  }

  getUsersByRole(page: number, size: number): Observable<Page<UserDto>>{
    return this.http.get<Page<UserDto>>(`/api/users/role?page=${page}&size=${size}`);
  }

  getSpecialistRequests(page: number, size: number): Observable<Page<UserDto>>{
    return this.http.get<Page<UserDto>>(`/api/users/requests?page=${page}&size=${size}`);
  }

  changeUserRoleToSpecialist(id: number): Observable<HttpResponse<any>>{
    return this.http.patch<any>('/api/users/accept/' + id, null);
  }

  changeUserRoleToUser(id: number): Observable<HttpResponse<any>>{
    return this.http.patch<any>('/api/users/reject/' + id, null);
  }

  getUserDetails(id: number): Observable<UserDto> {
    return this.http.get<UserDto>("/api/users/" + id);
  }

  getCurrentUserDetails(): Observable<UserDto> {
    return this.http.get<UserDto>("/api/users/current");
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>('/api/users/' + id);
  }

  requestSpecialistAccount(value: any): Observable<HttpResponse<any>> {
    return this.http.patch<any>('/api/users/current', value);
  }

  isRequestedSpecialist(user: UserDto): boolean {
    return user && user.userRole === 'ROLE_SPECIALIST_REQUEST';
  }

  isUser(user: UserDto) {
    return user && user.userRole === 'ROLE_USER';
  }

  isSpecialist(user: UserDto){
    return user && user.userRole === 'ROLE_SPECIALIST';
  }
}
