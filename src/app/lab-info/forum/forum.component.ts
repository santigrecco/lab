import { Component, OnInit, Input, ElementRef, ViewChild, Inject } from '@angular/core';

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
        {
          author: 'someone',
          message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim labore eaque doloribus necessitatibus quae iure expedita animi quia quidem temporibus. Modi et, magnam fuga incidunt consectetur tempora aliquam facere rem?',
          likes:[{user:'fakeUser', id: 7867} ] ,
          date: new Date() 
        },
        {
          author: 'someone',
          message: 'a good message',
          likes:[{user:'fakeUser', id: 7867} ],
          date: new Date()  
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
          likes:[{user:'fakeUser', id: 7867} ] ,
          date: new Date() 
        },
        {
          author: 'someone',
          message: 'a good message',
          likes:[{user:'fakeUser', id: 7867} ],
          date: new Date()  
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
          likes:[{user:'fakeUser', id: 7867} ] ,
          date: new Date() 
        },
        {
          author: 'someone',
          message: 'a good message',
          likes:[{user:'fakeUser', id: 7867} ],
          date: new Date()  
        },
      ],
      views: 28,
      author: {
        username: 'author',
      },
    }
  ]  
  public newTopicModal: Boolean = false;
  private userData = this.UserService.getUserData();


  constructor(@Inject('UserService') public UserService) {}

  ngOnInit() {
    this.topics.forEach(el => {
      el.show = false;
    });
      
  }

  openContent(topic) {
    topic.show = !topic.show
  }

  send(topic, content, textarea) {
    const { username } = this.userData;
    const { innerHTML } = textarea;
    if(innerHTML !== '') {
      const newMessage = {
         author: username,
         message: innerHTML,
         likes: [],
         date: new Date()
      }
      topic.messages.push(newMessage);
      textarea.innerHTML = "";
    } 
    
  }

  newTopicModalToggle() {
    this.newTopicModal = !this.newTopicModal;
  }

  newTopic(title, message) {
    //regex for only whitespaces
    // if (title.replace(/\s/g, '') === '' || message.replace(/\s/g, '') === '') return null;
    const { username } = this.userData;
    const newTopic = {
      name: title,
      messages: [{author: username, message: message.value, likes:[], date: new Date()}],
      views:0,
      author: {username: username},
      show: false,
    }
    this.topics.push(newTopic);
    this.newTopicModalToggle();
    
  }

  deleteMessage(message, messages) {
    const index = messages.indexOf(message);
    messages.splice(index, 1);
  }

  deleteTopic(topic, topics) {
    const index = topics.indexOf(topic);
    topics.splice(index, 1);
  }
  
}
