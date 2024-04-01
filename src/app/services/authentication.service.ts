import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import SignIn from '../models/signin';
import SignUp from '../models/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  protected readonly endpoint = environment.backendUrl

  constructor(private http: HttpClient) { }

  public async isLoggedIn() {
    const response: any = await lastValueFrom(this.http.get<string>(`${this.endpoint}/check-signin`));

    return response.loggedIn
  }

  public signIn(data: SignIn): Observable<any> {
    return this.http.post<string>(`${this.endpoint}/signin`, data);
  }

  public signUp(data: SignUp): Observable<string> {
    return this.http.post<string>(`${this.endpoint}/signup`, data);
  }
}
