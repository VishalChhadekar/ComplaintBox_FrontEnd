import { Component, OnInit } from '@angular/core';
import { MasterService } from '../Service/master.service';
import { Engineer } from '../Types/Engineer';

@Component({
  selector: 'app-manager-navbar',
  templateUrl: './manager-navbar.component.html',
  styleUrls: ['./manager-navbar.component.css']
})
export class ManagerNavbarComponent implements OnInit {

  constructor(private masterService: MasterService) { }

  engineers: Engineer[] = [];

  ngOnInit(): void {
    console.log("Manager ngOnInit.")
      this.masterService.viewEngineers().subscribe((data: any[])=>{
        this.engineers=data;
      });
      console.log(this.engineers);
  }
}
