import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { Ttransction } from '../model/saving';
import { TransctionService } from '../service/transction.service';

@Component({
  selector: 'app-transction',
  templateUrl: './transction.component.html',
  styleUrls: ['./transction.component.css']
})
export class TransctionComponent implements OnInit {
  title = 'Account Transction';
  keyword: string = '';
  transtactionList: Ttransction[] = [];
  transction: Ttransction = new Ttransction(0, 0, '', '', 0, '');
    constructor(private ts: TransctionService) { }

  ngOnInit(): void {
    this.getTranstactionList('');
  }

  getTranstactionList(keyword): void{
  this.ts.getTranstactionList(keyword).subscribe(data => this.transtactionList = data);

  }

  searchKeyword(){
    this.getTranstactionList(this.keyword);
  }
}
