import { SendMessagesComponent } from './dashboard/send-messages/send-messages.component';
import { CreateMessageComponent } from './dashboard/create-message/create-message.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AllMessagesComponent } from './dashboard/all-messages/all-messages.component';
import { MyMessagesComponent } from './dashboard/my-messages/my-messages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    children: [{
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: '',
      redirectTo: 'dashboard/allMessages',
      pathMatch: 'full',
    },
    {
      path: 'myMessages',
      component: MyMessagesComponent,
    },
    {
      path: 'createMessages',
      component: CreateMessageComponent,
    },
    {
      path: 'sendMessages',
      component: SendMessagesComponent,
    },
    {
      path: 'allMessages',
      component: AllMessagesComponent,
    },

    ]
  },

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
