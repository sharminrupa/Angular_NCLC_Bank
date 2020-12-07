import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../model/show';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) { }

  getAccountList(keyword): Observable<Account[]>{
    return this.http.get<Account[]>('http://localhost:8080/account/list');
  }

  edit(id){
    return this.http.get<Account>('http://localhost:8080/account/one/' + id);
  }

  delete(id){
    return this.http.delete('http://localhost:8080/account/delete/' + id);
  }

}
