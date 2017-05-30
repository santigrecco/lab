import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-bottom-fog',
  templateUrl: './bottom-fog.component.html',
  styleUrls: ['./bottom-fog.component.less']
})
export class BottomFogComponent implements OnInit {
  public fullHeight = document.body.clientHeight 
  public scrolled = window.scrollY;
  public windowHeight = window.innerHeight; 

  constructor(private router: Router) { 
    // update the window height  when route change 
    router.events.subscribe(val => {
      this.fullHeight = document.body.clientHeight;
      this.scrolled = window.scrollY;
      this.windowHeight = window.innerHeight;
    })
    

  }

  ngOnInit() {
    // update the actual position on the screen (scrolled)
    document.addEventListener('scroll', e => {
      this.scrolled = window.scrollY;      
    })
    document.addEventListener("DOMContentLoaded", ()=>{
      this.fullHeight = document.body.clientHeight;
      document.removeEventListener("DOMContentLoaded");
    });

  }

  ngAfterViewInit() {
   
  }

  showFog() {
    // show fog until the user reach the bottom
    // remove 20px
    return ((this.fullHeight -20) > (this.scrolled + this.windowHeight));
  }

  print() {
  
  }
} 
