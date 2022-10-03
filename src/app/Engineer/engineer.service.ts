import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {

  private url = 'http://localhost:8999/engineer';

  constructor(private httpClient: HttpClient) { }

  viewComplaints(engId: any): Observable<any[]>{
    return this.httpClient.get<any[]>(this.url+'/viewComplaints/'+engId)
  }

  updateStatus(status: any){
    return this.httpClient.post<any>(this.url+ '/updateStatus', status);                                        
  }
}
