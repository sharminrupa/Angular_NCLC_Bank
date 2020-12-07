import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/model/bankemployee';
import { EmployeeService } from 'src/app/service/employee.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login Here';

  employee: Employee = new Employee('', '', '', '', '', '', '');
  constructor(private userService: UserService, private toster: ToastrService) { }

  ngOnInit(): void {
  }
    login(): void{
      this.userService.login(this.employee);
      if (this.toster != null){
        this.toster.success('Success', 'Login success');
      }else{
        this.toster.error('Failed', 'Login failled');
      }
    }
}
