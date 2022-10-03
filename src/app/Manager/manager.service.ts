import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private url = 'http://localhost:8999/manager';

  constructor(private httpClient: HttpClient) { }

  viewComplaint(pinCode: any): Observable<any>{
    return this.httpClient.get<any>(this.url+'/viewComplaints/'+pinCode);
  }

  viewEngineers(pinCode: any): Observable<any[]>{
    return this.httpClient.get<any[]>(this.url+'/viewEngineers/'+pinCode);
  }
  assingEngineer(assingEngToComp: any): Observable<any>{
    return this.httpClient.post<any>(this.url+'/assignEngineer', assingEngToComp);
  }
  
}
