import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  headersWithJwt! : HttpHeaders;
  headersWithoutJwt! : HttpHeaders;

  constructor(private http : HttpClient) {
     this.headersWithJwt = new HttpHeaders({
      'Content-Type': 'application/json',
    });
     
    this.headersWithoutJwt = new HttpHeaders({
      'Content-Type': 'application/json'
    });
   }


  // signUp(formData: Register) {
  //   return this.http.post<Success>(`${API_BASE_URL}/api/v1/auth/register`, formData);
  // }

  // login(formData: LoginDetails) {
  //   return this.http.post<VerifiedUser>(`${API_BASE_URL}/api/v1/auth/login`, formData);
  // }
  
  // verifyEmail(formData: VerifyEmail) {
  //   return this.http.post<VerifiedUser>(`${API_BASE_URL}/api/v1/auth/verify-email`, formData);
  // }

  // googleOAuth() {
  //   return this.http.get<VerifiedUser>(`${API_BASE_URL}/api/v1/auth/login/oauth/google`);
  // }
  
  // googleCallBackRequest(formData : callbackRequest){
  // // Make the HTTP GET request with the parameters
  // return this.http.post<callbackRequest>(`${API_BASE_URL}/api/v1/auth/auth/callback`, formData);
  // }

  // // Sessions Service
  
  // saveUserAndToken(user: AuthenticatedUser, token: string): void {
  //   sessionStorage.setItem('currentUser', JSON.stringify(user));
  //   sessionStorage.setItem('token', token);
  // }

  // getUser(): AuthenticatedUser | null {
  //   const user = sessionStorage.getItem('currentUser');
  //   return user ? JSON.parse(user) : null;
  // }

  // getToken(): string | null {
  //   return sessionStorage.getItem('token');
  // }

  // clearSession(): void {
  //   sessionStorage.removeItem('currentUser');
  //   sessionStorage.removeItem('token');
  // }
}
