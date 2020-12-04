import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/bankemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getTranstactionList(keyword): Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:8080/save');
  }
}
