import { Component, OnInit } from '@angular/core';
import { Show } from 'src/app/model/show';
import { ShowService } from 'src/app/service/show.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  accountList: Show[] = [];
  title = 'Customer Details';

  constructor(private show: ShowService) { }

  ngOnInit(): void {
    this.getAccountList('');
  }

  getAccountList(keyword){
    this.show.getAccountList(keyword).subscribe(data => this.accountList = data);
  }

}
