import { Component, OnInit, Input, Inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  links: Object = {
    labOwner:[
      {name: 'Requests', path: '/requests'},
      {name: 'Reports', path: '/reports'}
    ],
    manager: [
      {name: 'Users', path: '/users'},
      {name: 'Requests', path: '/requests'},
      {name: 'Tags', path: '/tags'},
      {name: 'Reports', path: '/reports'},
      {name: 'Security', path: '/security'}
    ]
  }
  windowWidth: Number = document.body.clientWidth;    
  mobileMenuActive: Boolean = false;
  private userData = this.UserService.getUserData();
  // public rank = this.userData.rank;
  public rank = 'labOwner'


  constructor(private location: Location, @Inject('UserService') private UserService) { }

  ngOnInit() {
  }

  resize() {
    this.windowWidth = document.body.clientWidth;
  }
  
  notiClick() {
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

  routeActive(route) {
    const path = this.location.path();
    return path.indexOf(route) !== -1;
  }

}
