import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { EngineerNavbarComponent } from './engineer-navbar/engineer-navbar.component';
import { ManagerNavbarComponent } from './manager-navbar/manager-navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './Service/token-intercepter.service';
import { AddManagerComponent } from './Admin/add-manager/add-manager.component';
import { AddCustomerComponent } from './Admin/add-customer/add-customer.component';
import { AddEngineerComponent } from './Admin/add-engineer/add-engineer.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { RaiseComplaintComponent } from './Customer/raise-complaint/raise-complaint.component';
import { ComplaintComponent } from './Customer/complaint/complaint.component';
import { ViewComplaintComponent } from './Manager/view-complaint/view-complaint.component';
import { EngViewComponentComponent } from './Engineer/eng-view-component/eng-view-component.component';
import { ViewComplaintsComponent } from './Customer/view-complaints/view-complaints.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AdminNavbarComponent,
    CustomerNavbarComponent,
    EngineerNavbarComponent,
    ManagerNavbarComponent,
    AddManagerComponent,
    AddCustomerComponent,
    AddEngineerComponent,
    AdminComponent,
    RaiseComplaintComponent,
    ComplaintComponent,
    ViewComplaintComponent,
    EngViewComponentComponent,
    ViewComplaintsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
