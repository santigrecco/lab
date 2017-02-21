import { LabsComponent } from './labs/labs.component'
import { SecondaryComponent } from './secondary/secondary.component'
import { ThirdComponent } from './third/third.component'
import { Routes } from '@angular/router'


export const APP_ROUTES:Routes = [
  {path: '', component: LabsComponent},
  {path: 'secondary', component: SecondaryComponent},
  {path: 'third', component: ThirdComponent} 
]
