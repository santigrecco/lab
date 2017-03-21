import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  backgroundImage: String = 'assets/home-background.jpg'; 
  user;
  rankSub;
  // background: url('assets/home-background.jpg');

  constructor(private router:ActivatedRoute) {
   }

  ngOnInit() {
    this.rankSub = this.router.data.subscribe( data => {
      this.user = data;
    })
                    
  }

  ngOnDestroy() {
    this.rankSub.unsubscribe();
  }
}
