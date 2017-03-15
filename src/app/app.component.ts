import { Component, Inject } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor (private location: Location) {
    
  }

  header() {
    if(this.location.path() === '/login') {
      return false
    } else {
      return true;
    }
  } 

}
