import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  // private url = "http://localhost:8999";
  private url = 'http://localhost:8999/manager/viewEngineers';
  constructor(private httpClient: HttpClient) { }

  viewEngineers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }
}
