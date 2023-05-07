import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {


  constructor(
    private http: HttpClient
  ) {
  }

  logout(): Observable<any> {
    return this.http.get(`/api/logout`);
  }

}
