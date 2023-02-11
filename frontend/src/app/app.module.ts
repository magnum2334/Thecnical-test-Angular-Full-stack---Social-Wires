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
import { SendMessagesComponent } from './dashboard/send-messages/send-messages.component';
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
    SendMessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
