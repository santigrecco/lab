import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
  @Input() lab;
  public userData = {
     rank: 'user'
   }
  constructor() { }

  ngOnInit() {
  }
  
  deleteMember(member) {
    const index = this.lab.team.indexOf(member);
    this.lab.team.splice(index, 1);
    
  }
}
