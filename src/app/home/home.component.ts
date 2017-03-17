import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  backgroundImage: String = 'assets/home-background.jpg'; 
  @Input() rank;
  manager:Boolean =  this.rank === 'manager';
  // background: url('assets/home-background.jpg');

  constructor(private router:ActivatedRoute) {
   }

  ngOnInit() {}

  
}
