import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  backgroundImage: String; 
  @Input() rank;
  manager:Boolean =  this.rank === 'manager';

  constructor(private router:ActivatedRoute) {
    console.log(this.rank)
   }

  ngOnInit() {}

  
}
