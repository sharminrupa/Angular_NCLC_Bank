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
import { ShowService } from './service/show.service';
import { EmployeeService } from './service/employee.service';
import { EditService } from './service/edit.service';
import { AccountService } from './service/account.service';
import { RouterModule } from '@angular/router';
import { TransctionComponent } from './transction/transction.component';
import { TransctionService } from './service/transction.service';
import { SavingComponent } from './transction/saving/saving.component';
import { WithdrowComponent } from './transction/withdrow/withdrow.component';
import { SavingService } from './service/saving.service';
import { WithdrowService } from './service/withdrow.service';

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
    ShowComponent,
    TransctionComponent,
    SavingComponent,
    WithdrowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [EmployeeService, EditService, AccountService, ShowService, SavingService, WithdrowService, TransctionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
