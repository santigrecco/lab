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
  windowWidth: Number = document.body.clientWidth;    
  mobileMenuActive: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  resize() {
    this.windowWidth = document.body.clientWidth;
  }
  
  notiClick() {
    console.log(this.windowWidth);
  }

  mobile() {
    if(this.windowWidth <= 760) {
      return true;
    }
    return false;
  }
  
  mobileMenu(menu) {
    if(!this.mobileMenuActive) {
      this.mobileMenuActive = !this.mobileMenuActive;
      menu.classList.add('active');
    } else{ 
      this.mobileMenuActive = !this.mobileMenuActive;
      menu.classList.remove('active');
    }
  }

}
