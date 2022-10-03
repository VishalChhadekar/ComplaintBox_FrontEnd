import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from 'src/app/Types/Complaint';
import { Feedback } from 'src/app/Types/Feedback';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-complaints',
  templateUrl: './view-complaints.component.html',
  styleUrls: ['./view-complaints.component.css']
})
export class ViewComplaintsComponent implements OnInit {

  userName: any
  complaint: any = {}
  isComplaintPresent: boolean = false;
  ticket: String = '';
  engineer: String = 'NA';
  public inputFeedback: String = '';

  feedback: Feedback = {
    complaintId: '',
    feedback: ''
  }
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.customerService.viewComplaint(this.userName).subscribe(result => {
      if (result != null) {
        this.isComplaintPresent = true;
        this.ticket = result.customer.ticket;
        this.complaint = result;
        if (result.customer.engineer != null) {
          this.engineer = result.customer.engineer;
        }
      }
    })
  }
  submitFeedback(compId: any) {
    this.feedback.complaintId = compId;
    this.feedback.feedback = this.inputFeedback;
    this.customerService.provideFeedback(this.feedback).subscribe(result => {
      if (result != null) {
        alert("Feedback Provided.");
      }
    });


  }

}
