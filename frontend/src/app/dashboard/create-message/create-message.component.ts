import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MessagesService } from '../service/messages.service';


@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css'],

})
export class CreateMessageComponent {
  user: any;

  constructor(private router: Router, private messagesService:MessagesService,private _snackBar:MatSnackBar) { }

  longText = `Join our affiliate marketing program and we'll help you get started. You can be up and running in minutes and start making money right away. We have the best platform in Latin America for sports predictions, so you can be sure that your audience is always looking for new predictions.`;
  messageForm = new FormGroup({
    content : new FormControl('', Validators.required),
    tilte : new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if (user !== null) {
     this.user = JSON.parse(user)
    }
  }


  async CreatePublication(){
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    if (this.messageForm.valid) {
      let data ={
        "tilte": this.messageForm.value.tilte,
        "content": this.messageForm.value.content,
        "user": this.user,
        'createdAt':hoy.toISOString()

      }
    await  this.messagesService.create(data).subscribe((res:any)=>{
        this._snackBar.open('okey ', "Cerrar", {
          duration: 3000,
          panelClass: "font",
        })
      },
      err =>
      this._snackBar.open(''+err, "Cerrar", {
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
