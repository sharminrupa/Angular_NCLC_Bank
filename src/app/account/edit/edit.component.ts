import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from 'src/app/model/account';
import { AccEdit } from 'src/app/model/edit';
import { ShowService } from 'src/app/service/show.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  title = 'Edit a customer account';
  accedit: Account = new Account(0, '', '', '', '', '', '', 0, '', '');
  constructor(private http: HttpClient, private route: ActivatedRoute, private routes: Router, private showService: ShowService, private toster: ToastrService) { }


  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');
    this.edit();
  }

  edit(){
    this.http.get<Account>('http://localhost:8080/account/one/' + this.id)
    .subscribe(data => {
      console.log(data);
      this.accedit = data;
    });
  }
  update(){
    this.http.put<Account>('http://localhost:8080/account/update', this.accedit)
    .subscribe(data => {
      this.routes.navigate(['/show']);
      if (data != null){
        this.toster.success('Success', 'Information updated');
      }else{
        this.toster.error('Failed', 'Information updated');
      }
    });
  }

}
