import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { EditComponent } from './account/edit/edit.component';
import { ShowComponent } from './account/show/show.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LayoutComponent } from './layout/layout.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
   {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'student', component: StudentComponent},
      {
        path: 'product', component: ProductComponent
      },
      {
        path: 'pipe-example', component: PipedemoComponent
      },
      {path: 'about', component: AboutComponent},
      {path: 'account', component: AccountComponent},
      {path: 'show', component: ShowComponent},
      {path: 'account/edit', component: EditComponent},
      {path: 'account/show', component: ShowComponent}
    ]
  },
  {
    path: '**', redirectTo: 'dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
