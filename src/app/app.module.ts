import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LabsComponent } from './labs/labs.component'
import { APP_ROUTES } from './app.routes';
import { SecondaryComponent } from './secondary/secondary.component';
import { ThirdComponent } from './third/third.component';
import { LoginComponent } from './login/login.component';
import { ProposeLabComponent } from './propose-lab/propose-lab.component';
import { EditLabComponent } from './edit-lab/edit-lab.component';
import { HomeComponent } from './home/home.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LabsComponent,
    SecondaryComponent,
    ThirdComponent,
    LoginComponent,
    ProposeLabComponent,
    EditLabComponent,
    HomeComponent,
    ComponentHeaderComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
