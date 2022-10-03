import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = 'http://localhost:8999/admin';
  constructor(private httpClient: HttpClient) { }

  addEngineer(engineer: any) {
    console.log("Getting engineer in adminService: " + engineer);
    return this.httpClient.post(this.url + '/addEngineer', engineer);
  }

  addManager(manager: any) {
    return this.httpClient.post(this.url + '/addManager', manager);
  }

  addCustomer(customer: any) {
    return this.httpClient.post(this.url + '/addCutomer', customer);
  }

  viewEngineers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url + '/viewEngineers');
  }

  viewManagers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url + '/viewManagers');
  }

  viewCustomers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url + '/viewCustomers');
  }

  deleteEngineer(id: any){
    console.log("URL: " +this.url+'/deleteEngineer/'+id);
    return this.httpClient.delete(this.url+'/deleteEngineer/'+id);
  }
  deleteManager(id: any){
    console.log("URL: " +this.url+'/deleteManager/'+id);
    return this.httpClient.delete(this.url+'/deleteManager/'+id);
  }
  deleteCustomer(id: any){
    console.log("URL: " +this.url+'/deleteCutomer/'+id);
    return this.httpClient.delete(this.url+'/deleteCutomer/'+id);
  }
}
