import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ttransction } from 'src/app/model/saving';

@Component({
  selector: 'app-withdrow',
  templateUrl: './withdrow.component.html',
  styleUrls: ['./withdrow.component.css']
})
export class WithdrowComponent implements OnInit {
  title = 'Withdrow Your Balance';
  transction: Ttransction = new Ttransction(0, 0, '', '', 0, '');
  constructor(private http: HttpClient, private route: Router, private toster: ToastrService) { }

  ngOnInit(): void {
  }
  withdrow(){
    this.http.put<Ttransction>('http://localhost:8080/transction/withdrow', this.transction)
    .subscribe(data => {
      this.route.navigate(['/transction']);
      if (this.http != null){
        this.toster.success('Success', 'Balance withdrow');
      }else{
        this.toster.error('Failed', 'Balance withdrow');
      }
    });
  }
}
