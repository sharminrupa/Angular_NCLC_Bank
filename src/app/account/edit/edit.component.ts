import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccEdit } from 'src/app/model/edit';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  title = 'Edit a customer account';
  accedit: AccEdit = new AccEdit(0, '', '', '', '', '', '');
  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }

  update(): void{
    this.http.post<AccEdit>('http://localhost:8080/account/update', this.accedit)
    .subscribe( data => {
      console.log('Edit successfull');
    });
  }

}
