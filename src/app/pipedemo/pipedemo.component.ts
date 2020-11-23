import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

 // name: string = 'Shuvin Tanvir';
  birthDate: Date = new Date(1988, 3, 15);

  constructor() { }

  ngOnInit(): void {
  }

}
