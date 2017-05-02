import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.less']
})
export class LabsComponent implements OnInit {
  @ViewChild('Element') public element;


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
  public isSmartPhone = window.screen.width < 700;
  
  constructor() {
    
  }

  ngOnInit() {
  }


  slideNext(list) {
     const { offsetWidth } = this.element.nativeElement;
     this.scrollToLeft(list, offsetWidth, 300);
    
  }
  slideBack(list) {
     const { offsetWidth } = this.element.nativeElement;
     this.scrollToLeft(list, -offsetWidth , 300);
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

  isScrollable(LabsView) {
    const {offsetHeight, scrollHeight} = LabsView;
    return offsetHeight === scrollHeight
  }
  
}
