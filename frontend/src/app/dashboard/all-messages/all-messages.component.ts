import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';
import { MessagesService } from '../service/messages.service';
import { FormatDatePipePipe } from '../create-message/format-date-pipe.pipe';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrls: ['./all-messages.component.css'],
  providers: [FormatDatePipePipe ]
})
export class AllMessagesComponent {
  user: any;
  myMessages: any;

  filter = new FormGroup({
    createdAt : new FormControl('', Validators.required),
    tilte : new FormControl('', Validators.required),
  });

  constructor(private messagesService: MessagesService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if (user !== null) {
      this.user = JSON.parse(user)
    }
    this.messagesService.allPublication().subscribe((res: any) => {
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
  applyFilter(eve: any){

    this.messagesService.FilterPublication(this.filter.value).subscribe((res: any) => {
      if (res.length > 0) {
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
