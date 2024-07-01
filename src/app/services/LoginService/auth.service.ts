import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly sessionStorageKey = 'currentUser';

  constructor() { }

  login(username: string, password: string): boolean {
    // For demonstration purposes, we'll assume the username and password are 'user' and 'password'
    if (username === 'user' && password === 'password') {
      const user = { username };
      sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    sessionStorage.removeItem(this.sessionStorageKey);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem(this.sessionStorageKey) !== null;
  }

  getCurrentUser(): any {
    return JSON.parse(sessionStorage.getItem(this.sessionStorageKey) || '{}');
  }
}
