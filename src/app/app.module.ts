import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LabsComponent } from './labs/labs.component'
import { APP_ROUTES } from './app.routes';
import { LoginComponent } from './login/login.component';
import { ProposeLabComponent } from './propose-lab/propose-lab.component';
import { EditLabComponent } from './edit-lab/edit-lab.component';
import { HomeComponent } from './home/home.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { EditHomeComponent } from './edit-home/edit-home.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';

import { TabsModule } from 'ng2-bootstrap';
import { ProjectInfoComponent } from './app-development/project-info/project-info.component';
import { TeamComponent } from './app-development/team/team.component';
import { RepositoryComponent } from './app-development/repository/repository.component';
import { TasksComponent } from './app-development/tasks/tasks.component';
import { ForumComponent } from './app-development/forum/forum.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LabsComponent,
    LoginComponent,
    ProposeLabComponent,
    EditLabComponent,
    HomeComponent,
    ComponentHeaderComponent,
    HomeComponent,
    HeaderComponent,
    EditHomeComponent,
    AppDevelopmentComponent,
    ProjectInfoComponent,
    TeamComponent,
    RepositoryComponent,
    TasksComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
