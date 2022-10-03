import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import { Register } from 'src/app/Types/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: Register = {
    username: '',
    password: '',
    role: 'CUSTOMER'
  }
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.authService.register(this.register).subscribe(result => {
      if (result != null) {
        alert("Register successfully.");
        this.router.navigate(['']);
      }
    })
  }

}
