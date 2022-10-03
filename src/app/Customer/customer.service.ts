import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../Types/Complaint';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url = 'http://localhost:8999/customer';

  constructor(private httpClient: HttpClient) { }

  raiseComplaint(complaint: Complaint): Observable<any[]> {
    return this.httpClient.post<any[]>(this.url+'/raiseComplaint', complaint);
  }

  viewComplaint(email: any): Observable<any>{
    return this.httpClient.get<any>(this.url+'/viewComplaint/'+email);
  }

  provideFeedback(feedback: any): Observable<any> {
    return this.httpClient.post<any>(this.url+'/addFeedback/'+feedback.complaintId, feedback);
  }
}
