import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  setToken(token: string) {
    sessionStorage.setItem("token", token);
  }

  getToken(): string | null {
    return sessionStorage.getItem("token");
  }

  isLoggedIn(): boolean {
    let token = sessionStorage.getItem("token");
    return token != null && this.notExpired(token);
  }

  private notExpired(token: string): boolean {
    let tokenDecoded = jwtDecode<any>(token);
    return (tokenDecoded.exp * 1000) > new Date().getTime();
  }

  public setAdminAccess(adminAccess: boolean) {
    sessionStorage.setItem("adminAccess", String(adminAccess));
  }

  public getAdminAccess(): boolean {
    let item = sessionStorage.getItem("adminAccess");
    return 'true' === item;
  }

  logout(){
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
  }

}
