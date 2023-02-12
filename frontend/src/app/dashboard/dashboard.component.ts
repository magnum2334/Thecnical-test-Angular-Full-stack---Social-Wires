import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  user: any;

  constructor(private router:Router) {}

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if (user !== null) {
     this.user = JSON.parse(user)
    }
    console.log( this.user)

  }
  isOpen = false;
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  Logout(){
    this.router.navigate(['']);
    localStorage.clear()
  }

}
