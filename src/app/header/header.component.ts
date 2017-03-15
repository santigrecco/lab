import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() rank;
  links: Object = {
    labOwner:[
      {name: 'Requests', path: '/requests'},
      {name: 'Reports', path: '/reports'}
    ],
    manager: [
      {name: 'Users', path: '/users'},
      {name: 'Requests', path: '/requests'},
      {name: 'Tags', path: '/tags'},
      {name: 'Reports', path: '/reports'}
    ]
  }
    

  constructor() { }

  ngOnInit() {
  }

}
