import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit() {
  }

  isActive(route) {
    return true;
  }

  click() {
    console.log(this.route.pathFromRoot);
  }
}
