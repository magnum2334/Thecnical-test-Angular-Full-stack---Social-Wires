import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register/service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private registerService: RegisterService) {}
  loginForm = new FormGroup({
    password : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required)
  });

  dashboard(){
    this.router.navigate(['/dashboard/allMessages']);
  }
  register(){
    this.router.navigate(['/register']);
  }
  login(){
    this.registerService.login({email:this.loginForm.value.email , password:this.loginForm.value.password}).subscribe((res:any)=>{
     if(res)
      localStorage.setItem(JSON.stringify(res), 'userAuth');
      this.router.navigate(['dashboard/allMessages']);
    })

  }
}
