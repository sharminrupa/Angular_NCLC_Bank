import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/bankemployee';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
title = 'This is employee registation page';
employee: Employee = new Employee('', '', '', '', '', '', '');

constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  save(): void{
    this.http.post<Employee>('http://localhost:8080/save', this.employee)
    .subscribe( data => {
      console.log('save successfull');
    });
  }
}
