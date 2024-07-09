import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import bcrypt from "bcrypt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly sessionStorageKey = 'currentUser';

  constructor(private router : Router) { }

  async login(email: string, password: string) {

    if(email == null && password == null) alert("Please provide email and password!");
   if(this.getCurrentUser().email === email && await this.checkPasswordMatch(password)){
      this.router.navigate(['/dashboard'])
   } else {
     alert("Login Unsuccessful!");
   }
  }

  checkPasswordMatch(password : string)  {
     return bcrypt.compare(password, this.getCurrentUser().password)
  }

  registration(email : string, password : string){
    if(email && password){
      const hashedPassword = bcrypt.hash(password, 10);
    }
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
