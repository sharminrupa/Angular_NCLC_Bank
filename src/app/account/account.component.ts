import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Account } from '../model/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  title = 'Create a new customer account';
  account: Account = new Account('', '', '', '', '', '', 0, '', '');
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  save(): void{
    this.http.post<Account>('http://localhost:8080/account/save', this.account)
    .subscribe( data => {
      console.log('save successfull');
    });
  }
}
