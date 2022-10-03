import { Component, OnInit } from '@angular/core';
import { Complaint } from 'src/app/Types/Complaint';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-raise-complaint',
  templateUrl: './raise-complaint.component.html',
  styleUrls: ['./raise-complaint.component.css']
})
export class RaiseComplaintComponent implements OnInit {

  raiseComplaint: Complaint={
    complaint_id: 0,
    name: '',
    address: '',
    pinCode: 0,
    contact: 0,
    complaint: '',
    feedback: 'NA',
    engineer: 0,
    tikit: '',
    userName: ''
  }
  raisedComplaint: any;
  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
  }

  submit(){
    console.log("Complaint value: " + this.raiseComplaint.complaint);
    console.log("Email: " + this.raiseComplaint.userName);
    this.customerService.raiseComplaint(this.raiseComplaint).subscribe(result=>{
      if(result!=null){
        this.raisedComplaint = result;
        alert("Complaint raised successfully1: Ticket: "+ this.raisedComplaint.customer.
        ticket
        );
      }
      console.log(this.raisedComplaint);
      console.log(result);
    });
  }

}
