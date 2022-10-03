import { Component } from '@angular/core';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComplaintBox';
  isAdmin: Boolean = false;
  isManager: Boolean = false;
  isEngineer: Boolean = false;
  isCustomer: Boolean = false;

  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {

    if (this.authService.getRole() == "admin") {
      this.isAdmin = true;
      console.log("Current Role in OnInIt of app.com: " + this.isAdmin);
    }
    if (this.authService.getRole() == "manager") {
      this.isManager = true;
      console.log("Current Role in OnInIt of app.com: " + this.isManager);
    }
    if (this.authService.getRole() == "engineer") {
      this.isEngineer = true;
      console.log("Current Role in OnInIt of app.com: " + this.isEngineer);
    }
    if (this.authService.getRole() == "customer") {
      this.isCustomer = true;
      console.log("Current Role in OnInIt of app.com: " + this.isCustomer);
    }
  }
}

