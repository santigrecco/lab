import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.less']
})
export class LabsComponent implements OnInit {

  labs = [
    {
      title: 'game design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaepteur siaborum.',
      img: 'assets/labs-img.jpg',
      tags: ['frontend', 'html'],
      likes: 10
    },
    {
      title: 'game design',
      description: 'Lorem ipsum dolor sit amet, ixcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: 'assets/labs-img.jpg',
      tags: ['frontend', 'html'],
      likes: 10
    },
    {
      title: 'game design',
      description: 'Lorem ipsumliquaxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: 'assets/labs-img.jpg',
      tags: ['frontend', 'html'],
      likes: 10
    },
    {
      title: 'game design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu',
      img: 'assets/labs-img.jpg',
      tags: ['frontend', 'html'],
      likes: 10
    },
    {
      title: 'game design',
      description: 'Lorem ipsumliquaxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: 'assets/labs-img.jpg',
      tags: ['frontend', 'html'],
      likes: 10
    },
    {
      title: 'game design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu',
      img: 'assets/labs-img.jpg',
      tags: ['frontend', 'html'],
      likes: 10
    },{
      title: 'game design',
      description: 'Lorem ipsumliquaxcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      img: 'assets/labs-img.jpg',
      tags: ['frontend', 'html'],
      likes: 10
    },
    {
      title: 'game design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu',
      img: 'assets/labs-img.jpg',
      tags: ['frontend', 'html'],
      likes: 10
    }
  ]
  isScrollableLeft(list) {
    return list.scrollLeft
  }
  isScrollableRight(list) {
    const maxScroll = list.scrollWidth;
    const scrolled = list.offsetWidth + list.scrollLeft;
    return !(maxScroll === scrolled)
  }

  @ViewChild('list') list: ElementRef
  constructor() {

  }

  ngOnInit() {
  }


  slideNext() {
    const element = this.list.nativeElement;
    this.scrollToLeft(element, 400, 300);
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // console.log(w);
    console.log(element.scrollWidth)
    console.log(element.offsetWidth + element.scrollLeft)
  }
  slideBack() {
    const element = this.list.nativeElement;
    this.scrollToLeft(element, -400, 300);
  }

  scrollToLeft(element, scroll, duration) {
    if (duration <= 0) return;
    var perTick = scroll / duration * 10;
    setTimeout(()=>{
      element.scrollLeft = element.scrollLeft + perTick;
      if(element.scrollLeft === scroll) return;
      this.scrollToLeft(element, scroll-perTick, duration-10);
    }, 10)

  }
}
