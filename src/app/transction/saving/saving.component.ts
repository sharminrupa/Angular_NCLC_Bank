import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ttransction } from 'src/app/model/saving';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css']
})
export class SavingComponent implements OnInit {
  title = 'Save Your Balance';
  transction: Ttransction = new Ttransction(0, 0, '', '', 0, '');
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }
  update(){
    this.http.put<Ttransction>('http://localhost:8080/transction/update', this.transction)
    .subscribe(data => {
      console.log('update success');
    });
  }
}
