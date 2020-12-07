import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/model/bankemployee';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
title = 'Bank Employee Registation here';
employee: Employee = new Employee('', '', '', '', '', '', '');

constructor(private http: HttpClient, private router: Router, private toster: ToastrService) { }

  ngOnInit(): void {
  }
  save(): void{
    this.http.post<Employee>('http://localhost:8080/save', this.employee)
    .subscribe( data => {
      console.log('save successfull');
      this.router.navigate(['/login']);
      if (data != null){
        this.toster.success('Success', 'Login success');
      }else{
        this.toster.error('Failed', 'Login failled');
      }
    });
  }
}
