import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccEdit } from 'src/app/model/edit';
import { Show } from 'src/app/model/show';
import { ShowService } from 'src/app/service/show.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
account: Account;
  accountList: Account[] = [];
  title = 'Customer Details';
 sho: Show = new Show(0, '', '', '', '', '', '');
  constructor(private show: ShowService, private toster: ToastrService) { }

  ngOnInit(): void {
    this.getAccountList('');
  }

  getAccountList(keyword): any{
    this.show.getAccountList(keyword).subscribe(data => {
      this.accountList = data;
      console.log(this.accountList);
    });
  }


  edit(id){
    this.show.edit(id).subscribe(data => this.edit);
  }

  delete(id){
    this.show.delete(id).subscribe(data => this.delete);
    if (this.toster != null){
      this.toster.success('Success', 'Delete success');
    }else{
      this.toster.error('Failed', 'Delete failled');
    }
  }

}
