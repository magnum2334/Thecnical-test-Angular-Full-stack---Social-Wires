import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateMessageComponent } from './dashboard/create-message/create-message.component';
import { AllMessagesComponent } from './dashboard/all-messages/all-messages.component';
import { MyMessagesComponent } from './dashboard/my-messages/my-messages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormatDatePipePipe } from './dashboard/create-message/format-date-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    CreateMessageComponent,
    AllMessagesComponent,
    MyMessagesComponent,
    PageNotFoundComponent,
    FormatDatePipePipe,
  ],
  imports: [
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [FormatDatePipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
