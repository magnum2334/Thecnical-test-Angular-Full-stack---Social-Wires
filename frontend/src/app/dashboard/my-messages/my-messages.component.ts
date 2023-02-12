import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagesService } from '../service/messages.service';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent {
  user: any;
  myMessages: any;
  filter = new FormGroup({
    createdAt : new FormControl('', Validators.required),
  });

  constructor(private messagesService: MessagesService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if (user !== null) {
      this.user = JSON.parse(user)
      this.messagesService.allPublicationUser(this.user).subscribe((res: any) => {
        if (res.length > 0) {
          this.myMessages = res;
          console.log(this.myMessages)
        } else {
          this._snackBar.open("se el primero en escribir un mensaje ", "Cerrar", {
            duration: 3000,
            panelClass: "font",
          })
        }
      },
        err =>
          console.log(err)
      )
    }



  }
  applyFilter(event: Event){

    this.messagesService.userFilterPublication(this.filter.value).subscribe((res: any) => {
      if (res.length > 0) {
        this._snackBar.open("mensajes filtrados  ", "Cerrar", {
          duration: 3000,
          panelClass: "font",
        })
        this.myMessages = res;
      } else {
        this._snackBar.open("no se encuentran mensajes ", "Cerrar", {
          duration: 3000,
          panelClass: "font",
        })
      }
    },
      err =>
        console.log(err)
    )

  }
}
