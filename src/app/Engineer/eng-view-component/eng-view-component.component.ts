import { Component, OnInit } from '@angular/core';
import { updateStatus } from 'src/app/Types/UpdateStatus';
import { EngineerService } from '../engineer.service';

@Component({
  selector: 'app-eng-view-component',
  templateUrl: './eng-view-component.component.html',
  styleUrls: ['./eng-view-component.component.css']
})
export class EngViewComponentComponent implements OnInit {

  public engId: any;
  public inputStatus: any;
  compIsPresent: boolean = false;
  complaints: any[] = [];

  status: updateStatus={
    complaintId: '',
    status: ''
  }
  constructor(private engineerService: EngineerService) { }
  

  ngOnInit(): void {
  }

  viewComplaints() {
    this.engineerService.viewComplaints(this.engId).subscribe(result => {
      if (result != null) {
        this.compIsPresent = true;
        this.complaints = result;
        console.log(result);
      }
    })
  }

  updateStatus(compId: any) {
    this.status.complaintId = compId;
    this.status.status = this.inputStatus;
    this.engineerService.updateStatus(this.status).subscribe(result=>{
      if(result!=null){
        alert("Status updated.");
      }
    })
  }

}
