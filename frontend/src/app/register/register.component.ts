import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private router:Router) {}

  dashboard(){
    this.router.navigate(['/dashboard']);
  }
}
