import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ttransction } from '../model/saving';

@Injectable({
  providedIn: 'root'
})
export class TransctionService {

  constructor(private http: HttpClient) { }

  getTranstactionList(keyword): Observable<Ttransction[]>{
    return this.http.get<Ttransction[]>('http://localhost:8080/transction/list/?keyword=' + keyword);
  }
}
