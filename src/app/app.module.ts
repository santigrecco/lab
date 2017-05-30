import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { TabsModule } from 'ng2-bootstrap';
import { PopoverModule } from 'ng2-bootstrap';
import { AccordionModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap/progressbar';
import { BsDropdownModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/modal';

// custom component
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
import { LabInfoComponent } from './lab-info/lab-info.component';
import { TeamComponent } from './lab-info/team/team.component';
import { RepositoryComponent } from './lab-info/repository/repository.component';
import { TasksComponent } from './lab-info/tasks/tasks.component';
import { ForumComponent } from './lab-info/forum/forum.component';
import { ProjectInfoComponent } from './lab-info/project-info/project-info.component';
import { BoxesComponent } from './lab-info/boxes/boxes.component';

// custom services 
import { UserService } from './services/user.service';
import { LabService } from './services/lab.service';
import { MyProposalsComponent } from './my-proposals/my-proposals.component';
import { ChatComponent } from './chat/chat.component';
import { JoinUnsuscribeReqComponent } from './join-unsuscribe-req/join-unsuscribe-req.component';
import { BottomFogComponent } from './bottom-fog/bottom-fog.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { UsersComponent } from './users/users.component';



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
    ProjectInfoComponent,
    TeamComponent,
    RepositoryComponent,
    TasksComponent,
    ForumComponent,
    ProjectInfoComponent,
    LabInfoComponent,
    TasksComponent,
    ProjectInfoComponent,
    TeamComponent,
    RepositoryComponent,
    ForumComponent,
    BoxesComponent,
    MyProposalsComponent,
    ChatComponent,
    JoinUnsuscribeReqComponent,
    BottomFogComponent,
    TextEditorComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    AccordionModule.forRoot(),
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
    ],
  providers: [
    {provide: 'UserService' , useClass: UserService},
    {provide: 'LabService' , useClass: LabService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
