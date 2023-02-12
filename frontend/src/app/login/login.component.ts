import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from '../register/service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private registerService: RegisterService, private _snackBar:MatSnackBar) {}
  loginForm = new FormGroup({
    password : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    localStorage.clear()
  }

  register(){
    this.router.navigate(['/register']);
  }
  async login(){
    await this.registerService.login({email:this.loginForm.value.email , password:this.loginForm.value.password}).subscribe((res:any)=>{
      console.log(res.user.length)
      if(res.user.length > 0){
        localStorage.setItem('userAuth', JSON.stringify(res.accessToken), );
        localStorage.setItem('user', JSON.stringify(res.user[0]), );
        this.router.navigate(['/dashboard/allMessages']);
      }else
        this._snackBar.open("el usuario existe ", "Cerrar", {
          duration: 3000,
          panelClass: "font",
        })
    })
  }
}
