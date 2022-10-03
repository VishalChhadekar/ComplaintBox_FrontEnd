import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddCustomerComponent } from './Admin/add-customer/add-customer.component';
import { AddEngineerComponent } from './Admin/add-engineer/add-engineer.component';
import { AddManagerComponent } from './Admin/add-manager/add-manager.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AmdinGuard } from './auth/amdin.guard';
import { AuthGuard } from './auth/auth.guard';
import { CustomerGuard } from './auth/customer.guard';
import { EngineerGuard } from './auth/engineer.guard';
import { LoginComponent } from './auth/login/login.component';
import { ManagerGuard } from './auth/manager.guard';
import { RegisterComponent } from './auth/register/register.component';
import { RoleGuard } from './auth/role.guard';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { ComplaintComponent } from './Customer/complaint/complaint.component';
import { RaiseComplaintComponent } from './Customer/raise-complaint/raise-complaint.component';
import { ViewComplaintsComponent } from './Customer/view-complaints/view-complaints.component';
import { EngineerNavbarComponent } from './engineer-navbar/engineer-navbar.component';
import { EngViewComponentComponent } from './Engineer/eng-view-component/eng-view-component.component';
import { HomeComponent } from './home/home.component';
import { ManagerNavbarComponent } from './manager-navbar/manager-navbar.component';
import { ViewComplaintComponent } from './Manager/view-complaint/view-complaint.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/add-customer', component: AddCustomerComponent , canActivate: [AmdinGuard]},
  { path: 'admin/add-engineer', component: AddEngineerComponent , canActivate: [AmdinGuard]},
  { path: 'admin/add-manager', component: AddManagerComponent , canActivate: [AmdinGuard]},
  { path: 'admin/viewEmployees', component: AdminComponent , canActivate: [AmdinGuard]},
  {
    path: 'admin', component: AdminNavbarComponent, canActivate: [AmdinGuard],
  },
  {
    path: 'manger', component: ManagerNavbarComponent, canActivate: [ManagerGuard],
    // data: {
    //   expectedRoles: ['admin', 'manger']
    // }
  },
  {path: 'manager/view-complaint', component: ViewComplaintComponent, canActivate: [ManagerGuard]},

 
  {path: 'engineer', component: EngineerNavbarComponent, canActivate: [EngineerGuard]},
  {path: 'engineer/view-complaint', component: EngViewComponentComponent, canActivate: [EngineerGuard]},



  {path: 'customer', component: CustomerNavbarComponent, canActivate: [CustomerGuard]},
  {path: 'customer/raise-complaint', component: RaiseComplaintComponent, canActivate: [CustomerGuard]},
  {path: 'customer/view-complaint', component: ViewComplaintsComponent, canActivate: [CustomerGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
