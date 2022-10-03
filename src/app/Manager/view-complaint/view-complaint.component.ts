import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { AssingEngToComp } from 'src/app/Types/AssingEngToComp';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.css']
})
export class ViewComplaintComponent implements OnInit {

  // public inputFeedback: String='';
  public compIsPresent: boolean = false;
  public engIsPresent: boolean = false;
  public complaintPinCode: any;
  public engineersPinCode: any;
  public engineerId: any;
  engineers: any[] = [];
  complaints: any[] = [];

  assingEngToComp: AssingEngToComp={
    engineerId: '',
    complaintId:''
  }



  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
  }

  viewComplaints() {
    this.managerService.viewComplaint(this.complaintPinCode).subscribe(result => {
      if (result != null) {
        this.compIsPresent = true;
        this.complaints = result;
        console.log(result);
      }
    })
  }
  viewEngineers() {
    this.managerService.viewEngineers(this.engineersPinCode).subscribe(result => {
      if (result != null) {
        this.engineers = result;
        this.engIsPresent = true;
        console.log(result);
      }
    })
  }

  assingEngineer(compId: any){
    this.assingEngToComp.complaintId = compId;
    this.assingEngToComp.engineerId = this.engineerId;
    console.log("EngID: "+ this.engineerId);
    this.managerService.assingEngineer(this.assingEngToComp).subscribe(result=>{
      if(result!=null){
        alert("Engineer Assigned.");
      }
    })
  }
}
