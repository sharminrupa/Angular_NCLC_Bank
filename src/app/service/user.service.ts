import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../model/bankemployee';
import { ViewModel } from '../model/view.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) { }

  login(user){
    this.http.post<ViewModel>('http://localhost:8080/login', user)
    .subscribe( (data) => {
      if (data.status === 'success'){
      localStorage.setItem('auth_email', data.data.email);
      localStorage.setItem('isCrudAppLoggedIn', 'true');
      this.router.navigate(['/']);
    } else{
      this.router.navigate(['/login']);
    }
  });
}

isLoggedin(): boolean{
  const isLogin = Boolean(localStorage.getItem('isCrudAppLoggedIn'));
  return isLogin;
}

logout(): void{
  localStorage.removeItem('auth_email');
  localStorage.removeItem('isCrudAppLoggedIn');
}

}
