import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  comment = '';
  postComment = [];
  post(): void{
    this.postComment.push(this.comment);
    this.comment = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
