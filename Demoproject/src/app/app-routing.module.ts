import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StatementComponent } from './statement/statement.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'creditcard',component:CreditcardComponent},
  {path:'statement',component:StatementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
