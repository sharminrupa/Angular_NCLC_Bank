
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from '../model/account';
import { ImageService } from '../service/ImageService';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
 // selectedFile: ImageSnippet;
  title = 'Create New Customer Account';
  account: Account = new Account(0, '', '', '', '', '', '', 0, '', '');
  constructor(private http: HttpClient, private router: Router, private toster: ToastrService) { }
  //, private imageService: ImageService
  ngOnInit(): void {
  }
  save(): void{
    this.http.post<Account>('http://localhost:8080/account/save', this.account)
    .subscribe( data => {
      console.log('save successfull');
      this.router.navigate(['/show']);
      if(data != null){
        this.toster.success('Success', 'Account created');
      }else{
        this.toster.error('Failed', 'Account create failled');
      }
    });
  }

  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.imageService.uploadImage(this.selectedFile.file).subscribe(
  //       (res) => {
  //       },
  //       (err) => {
  //       });
  //   });

  //   reader.readAsDataURL(file);
  // }
}
