import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/bankemployee';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'http://localhost:8080/account/save';

  constructor(private http: HttpClient) { }

  // saveUser(entity): Observable<Account>{
  //   // const res = this.http.post<User>(this.baseUrl + '');
  //   // return res;
  // }
}
