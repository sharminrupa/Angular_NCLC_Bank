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
employee;
isSubmitted = false;

constructor(private userService: UserService) {
  this.employee = new Employee(0, '', '', '', '', '', '', '', '', '', '', '');
 }

  ngOnInit(): void {
  }

  submit(): void{
    this.userService.saveUser(this.employee)
    .subscribe(employee => {
      console.log(employee);
    });
    this.isSubmitted = true;
  }

}
