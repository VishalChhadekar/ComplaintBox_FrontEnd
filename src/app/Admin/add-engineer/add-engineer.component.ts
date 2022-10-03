import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Engineer } from 'src/app/Types/Engineer';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-engineer',
  templateUrl: './add-engineer.component.html',
  styleUrls: ['./add-engineer.component.css']
})
export class AddEngineerComponent implements OnInit {

  engineer: Engineer = {
    engineer_id: '',
    name: '',
    pinCode: ''
  }
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.adminService.addEngineer(this.engineer).subscribe(result => {
      if (result != null) {
        this.router.navigate(['/']);
      }
    })

  }


}
