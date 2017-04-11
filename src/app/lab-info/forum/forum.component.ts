import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.less']
})
export class ForumComponent implements OnInit {
  @Input() lab;
  public topics: any = [
    {
      name: 'a Topic',
      messages: [
        'a good message',
        'a good message',
        'a good message',
        'a good message'
      ],
      views: 28,
      author: {
        username: 'author',
      },
    },
    {
      name: 'a Topic',
      messages: [
        'a good message',
        'a good message',
        'a good message',
        'a good message'
      ],
      views: 28,
      author: {
        username: 'author',
      }
    },
    {
      name: 'a Topic',
      messages: [
        'a good message',
        'a good message',
        'a good message',
        'a good message'
      ],
      views: 28,
      author: {
        username: 'author',
      }
    }
  ]  

  constructor() {}

  ngOnInit() {
    // this.topics.forEach(el => {
    //   el.show = false;
    // })
  }
  openContent(topic) {
    topic.show = !topic.show
  }
}
