import { LabInfoComponent } from './lab-info/lab-info.component';
import { ProposeLabComponent } from './propose-lab/propose-lab.component';
import { EditLabComponent } from './edit-lab/edit-lab.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { LabsComponent } from './labs/labs.component';
import { LoginComponent } from './login/login.component';
import {  HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';


export const APP_ROUTES:Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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
  },
  {
    path: 'home/edit',
    component: EditHomeComponent
  },
  {
    path: 'labs/edit-lab',
    component: EditLabComponent
  },
  { 
    path: 'labs/propose-lab',
    component: ProposeLabComponent
  },
  {
    path: 'labs/proposed-labs/:lab',
    component: LabInfoComponent
  },
  {
    path: 'labs',
    component: LabsComponent
  }
]
