import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ttransction } from 'src/app/model/saving';

@Component({
  selector: 'app-saving',
  templateUrl: './saving.component.html',
  styleUrls: ['./saving.component.css']
})
export class SavingComponent implements OnInit {
  title = 'Save Your Balance';
  transction: Ttransction = new Ttransction(0, 0, '', '', 0, '');
  constructor(private http: HttpClient,  private route: Router, private toster: ToastrService) { }
  ngOnInit(): void {
  }
  save(){
    this.http.put<Ttransction>('http://localhost:8080/transction/saving', this.transction)
    .subscribe(data => {
      this.route.navigate(['/transction']);
      if (this.http != null){
        this.toster.success('Success', 'Balance added');
      }else{
        this.toster.error('Failed', 'Balance withdrow');
      }
    });
  }
}
