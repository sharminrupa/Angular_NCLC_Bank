import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  age = 10;
  ageTitle='Please enter your title.'
  text = 'text';

  constructor() { }

  ngOnInit(): void {
  }

  getClass(): string {

    return (this.age>9)? 'text-success':'text-danger';
  }

}
