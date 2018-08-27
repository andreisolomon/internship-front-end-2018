import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  public getToken(): string {
    return localStorage.token;
  }

  public isAuthenticated(): boolean {
    return this.getToken() !== undefined && this.getToken() !== '';
  }

}