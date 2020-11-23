import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student = new Student(0, '', '', '');
  studentList: Student[]


  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  save(): void {
    this.http.post<Student>('http://localhost:8080/restapi-jersey/save', this.student)
    .subscribe( (data) =>{
      if(data != null){
        this.toastr.success('Success', 'Save successful');
      }else{
        this.toastr.error('Failed!', 'Save failed!', {
          timeOut: 3000,
        });
      }
    })
    
  }

  getStudentList(): void {
    this.http.get<Student[]>('http://localhost:8080/restapi-jersey')
    .subscribe( (data) => {
      this.studentList = data
    });
  }

}
