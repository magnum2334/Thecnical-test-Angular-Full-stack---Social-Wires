import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './service/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface User {
  fullName: String;
  username: String;
  email: String;
  password: String;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private router: Router, private registerService:RegisterService,private _snackBar:MatSnackBar) { }

  create = new FormGroup({
    fullName : new FormControl('', Validators.required),
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    email : new FormControl('', Validators.required)
  });

  async createuser(){
    if (this.create.valid) {
    await  this.registerService.create(this.create.value).subscribe((res:any)=>{

        if(res){
          this.registerService.login({surname:this.create.value.username , password:this.create.value.password}).subscribe((res:any)=>{
            localStorage.setItem('userAuth', JSON.stringify(res.accessToken), );
            localStorage.setItem('user', JSON.stringify(res.user[0]));
            this.router.navigate(['/dashboard/allMessages']);
          })
        }
      },
      err =>
      this._snackBar.open('el email ya fue registrado ', "Cerrar", {
        duration: 3000,
        panelClass: "font",
      })
      )
    }else
      this._snackBar.open("Completa los campos, Verifica los datos por favor ", "Cerrar", {
        duration: 3000,
        panelClass: "font",
      })
  }
}
