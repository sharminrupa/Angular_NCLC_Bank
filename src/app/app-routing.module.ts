import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountComponent } from './account/account.component';
import { EditComponent } from './account/edit/edit.component';
import { ShowComponent } from './account/show/show.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginGuardGuard } from './guard/login-guard.guard';
import { DashboardComponent } from './Home/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { SavingComponent } from './transction/saving/saving.component';
import { TransctionComponent } from './transction/transction.component';
import { WithdrowComponent } from './transction/withdrow/withdrow.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
     component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'product', component: ProductComponent
      },
      {
        path: 'pipe-example', component: PipedemoComponent
      },
      { path: 'dashbord', component: DashboardComponent },
      { path: 'about', component: AboutComponent },
      { path: 'account', component: AccountComponent },
      { path: 'show', component: ShowComponent },
      { path: 'edit', component: EditComponent },
      { path: 'transction', component: TransctionComponent },
      { path: 'saving', component: SavingComponent },
      { path: 'withdrow', component: WithdrowComponent },
      { path: 'account/show', component: ShowComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
