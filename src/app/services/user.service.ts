import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import UserInfo from '../models/userInfo';
import Transaction from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected readonly endpoint = environment.backendUrl
  private token = localStorage.getItem('access-token') ?? '';

  constructor(private http: HttpClient) { }

  public userProfile(): Observable<UserInfo> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get<any>(`${this.endpoint}/users/profile`, { headers });
  }

  public userTransactions(transaction: Transaction): Observable<UserInfo> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.post<any>(`${this.endpoint}/transactions`, transaction);
  }
}
