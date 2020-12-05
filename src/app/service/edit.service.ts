import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show } from '../model/show';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http: HttpClient) { }

  update(): any{
    return this.http.get<Show[]>('http://localhost:8080/account/update');
  }
}
