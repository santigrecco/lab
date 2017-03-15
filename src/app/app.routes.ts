import { LabsComponent } from './labs/labs.component'
import { LoginComponent } from './login/login.component'
import {  HomeComponent } from './home/home.component'
import { Routes } from '@angular/router'


export const APP_ROUTES:Routes = [
  {
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      rank: 'manager'
    }
  }
]
