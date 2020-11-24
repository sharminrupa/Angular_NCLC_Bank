import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ToastrModule } from 'ngx-toastr';

import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { EditComponent } from './account/edit/edit.component';
import { ShowComponent } from './account/show/show.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LayoutComponent,
    StudentComponent,
    LoginComponent,
    SignupComponent,
    PipedemoComponent,
    AboutComponent,
    AccountComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
