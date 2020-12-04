import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/bankemployee';
import { EmployeeService } from 'src/app/service/employee.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  employee: Employee = new Employee('', '', '', '', '', '', '');
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
    login(){
      this.userService.login(this.employee);
    }
}
