import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'lab-info',
  templateUrl: './lab-info.component.html',
  styleUrls: ['./lab-info.component.less']
})
export class LabInfoComponent implements OnInit {
  
  // userData = {
  //   rank: 'manager'
  // }
  public userData = this.UserService.getUserData();
  public lab = this.LabService.getLab(123);
  public windowWidth: Number = window.innerWidth;


  constructor( private route: ActivatedRoute, 
    @Inject('UserService') private UserService,
    @Inject('LabService') private LabService ) {

    this.getLab();
   }

  ngOnInit() {
    window.addEventListener('resize', (e)=>{
      this.windowWidth = window.innerWidth;
    })        
  }
  
  leave() {
    alert('leave');
  }

  getLab() {
    this.lab.name = this.route.snapshot.params['lab'];
  }

  edit(){}
  
  delete(){}

  getType() {
    return this.smartphone() ? 'pills' : 'tabs';
  }
  smartphone() {
    return this.windowWidth < 600;
  }

  deleteModalCancel(deleteModal) {
    deleteModal.hide();
  }

  joinTeam(joinModal) {
    this.lab.team.push(this.userData)
    joinModal.hide();
  }

  leaveTeam(joinModal) {
    const { team } = this.lab;
    const index = team.indexOf(this.userData);
    team.splice(index, 1);
    joinModal.hide();
  }

  isMember() {
    const { id } = this.userData;
    const { team } = this.lab;
    const index = team.map(el => {return el.id}).indexOf(id);    
    return index !== -1;
  }
}


