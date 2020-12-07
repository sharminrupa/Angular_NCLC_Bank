import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../model/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  title = 'Create New Customer Account';
  account: Account = new Account(0, '', '', '', '', '', '', 0, '', '');
  constructor(private http: HttpClient, private router: Router, private toster: ToastrService) { }

  ngOnInit(): void {
  }
  save(): void{
    this.http.post<Account>('http://localhost:8080/account/save', this.account)
    .subscribe( data => {
      console.log('save successfull');
      this.router.navigate(['/show']);
      if(data != null){
        this.toster.success('Success', 'Account created');
      }else{
        this.toster.error('Failed', 'Account create failled');
      }
    });
  }
}
