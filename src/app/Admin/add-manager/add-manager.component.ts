import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/Types/Manager';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  manager: Manager = {
    name: '',
    pinCode: '',
    manager_id: ''
  }
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.adminService.addManager(this.manager).subscribe(result => {
      if (result != null) {
        alert("Manager Added.");
        this.router.navigate(['/']);
      }
    })
  }
}
