import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Types/Customer';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = {
    name: '',
    address: '',
    pinCode: '',
    contact: 0,
    ticket: 'NA',
    cust_id: ''
  }
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.adminService.addCustomer(this.customer).subscribe(result => {
      if (result != null) {
        alert("Customer added.");
        this.router.navigate(['/']);
      }
    });

  }

}
