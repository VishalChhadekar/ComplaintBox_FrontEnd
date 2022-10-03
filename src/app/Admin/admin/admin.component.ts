import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Types/Customer';
import { Engineer } from 'src/app/Types/Engineer';
import { Manager } from 'src/app/Types/Manager';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  engineers: Engineer[] = [];
  managers: Manager[] = [];
  customers: Customer[] = [];

  ngOnInit(): void {
    this.adminService.viewEngineers().subscribe((data: any[]) => {
      this.engineers = data;
    });
    this.adminService.viewManagers().subscribe((data: any[]) => {
      this.managers = data;
    });
    this.adminService.viewCustomers().subscribe((data: any[]) => {
      this.customers = data;
    });
  }

  deleteEngineer(engId: any) {
    this.adminService.deleteEngineer(engId).subscribe();
  }

  deleteManager(engId: any) {
    this.adminService.deleteManager(engId).subscribe();
  }
  deleteCustomer(custId: any) {
    this.adminService.deleteCustomer(custId).subscribe();
  }

}
