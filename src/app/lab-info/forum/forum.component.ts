import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.less']
})
export class ForumComponent implements OnInit {
  @Input() lab;
  @ViewChild('textarea') textarea: ElementRef;
  public userData = {
    username: 'santiago.grecco',
    id: 0,
    img: './aUrl'  
  }
  public topics: any = [
    {
      name: 'a Topic',
      messages: [
        {
          author: 'someone',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim labore eaque doloribus necessitatibus quae iure expedita animi quia quidem temporibus. Modi et, magnam fuga incidunt consectetur tempora aliquam facere rem?',
          likes:[{user:'fakeUser', id: 7867} ]  
        },
        {
          author: 'someone',
          message: 'a good message',
          likes:[{user:'fakeUser', id: 7867} ]  
        },
      ],
      views: 28,
      author: {
        username: 'author',
      },
    },
    {
      name: 'a Topic',
      messages: [
        {
          author: 'someone',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim labore eaque doloribus necessitatibus quae iure expedita animi quia quidem temporibus. Modi et, magnam fuga incidunt consectetur tempora aliquam facere rem?',
          likes:[{user:'fakeUser', id: 7867} ]  
        },
        {
          author: 'someone',
          message: 'a good message',
          likes:[{user:'fakeUser', id: 7867} ]  
        },
      ],
      views: 28,
      author: {
        username: 'author',
      },
    },
    {
      name: 'a Topic',
      messages: [
        {
          author: 'someone',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim labore eaque doloribus necessitatibus quae iure expedita animi quia quidem temporibus. Modi et, magnam fuga incidunt consectetur tempora aliquam facere rem?',
          likes:[{user:'fakeUser', id: 7867} ]  
        },
        {
          author: 'someone',
          message: 'a good message',
          likes:[{user:'fakeUser', id: 7867} ]  
        },
      ],
      views: 28,
      author: {
        username: 'author',
      },
    }
  ]  


  constructor() {}

  ngOnInit() {
    this.topics.forEach(el => {
      el.show = false;
    })
    
      
  }

  openContent(topic) {
    topic.show = !topic.show
  }

  send(topic, content) {
    const { username } = this.userData;
    const { innerHTML } = this.textarea.nativeElement;
    if(innerHTML !== '') {
      const newMessage = {
         author: username,
         message: innerHTML,
         likes: []
      }
      topic.messages.push(newMessage);
      this.textarea.nativeElement.innerHTML = "";
    } 
  }

  newTopic() {
    
  }
  
}
