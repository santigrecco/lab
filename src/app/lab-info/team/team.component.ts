import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
  @Input() lab;
  @Input() userData;
  public showNewMemberModal = false;


  constructor() { }

  ngOnInit() {
  }
  
  deleteMember(member) {
    const index = this.lab.team.indexOf(member);
    this.lab.team.splice(index, 1);
  }

  toggleNewMemberModal() {
    this.showNewMemberModal = !this.showNewMemberModal;
  }
  addMember(user, role) {
    if(user.replace(/\s/g, '') !== '' && user.replace(/\s/g, '') !== '') {
      const newMember = {
        name: user,
        role: role,
        status: 'unsubscribed'
      }
      this.lab.team.push(newMember);
      this.toggleNewMemberModal();
    }
    
  }
}
