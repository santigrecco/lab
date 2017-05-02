import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  public show: Boolean = false;
  public userData = this.UserService.getUserData()
  public chat: any = {
    connected: [
      { name: 'Natalia', lastname: 'Maldini' },
      { name: 'Pablo', lastname: 'Rabal' },
      { name: 'Juan', lastname: 'Rodriguez' }
    ],
    messages: [
      {
        author: { 
          name: 'Natalia Maldini',
          id: 93820
        },
        message: 'I think we need a change'
      },
      {
        author: { name: 'Roberto Herrera', id: 980900000002 }, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus odio incidunt placeat, sapiente voluptate culpa eum autem dolorem natus dicta. Temporibus vitae ipsa minus repellendus. Vero placeat in dolor fugit.'
      },
      {
        author: { name: 'Juan Rodriguez', id: 1830809 }, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus odio incidunt placeat, sapiente voluptate culpa eum autem dolorem natus dicta. Temporibus vitae ipsa minus repellendus. Vero placeat in dolor fugit.'
      }
    ]
  }
  constructor( @Inject('UserService') private UserService) { }

  ngOnInit() {
  }

  toggleChats(chats) {
    const { offsetHeight } = chats;
    if (offsetHeight === 0) {
      chats.style.maxHeight = '400px'
    } else {
      chats.style.maxHeight = '0px';
    }
    this.show = !this.show;
  }

  ownMessage(chat) {
    const { id } = chat.author;
    return id === this.userData.id
  }

  keyup(event, input) {
    event.key === 'Enter' ? this.sendMessage(input) : null;
  }

  sendMessage(input) {
    const { value } = input;
    if(value.replace(/\s/g, '') == '') return;
    const { name, lastname, id } = this.userData;
    const newMessage = {
      author: {
        name: name,
        lastname: lastname,
        id: id
      },
      message: input.value
    }
    this.chat.messages.push(newMessage)
    input.value = '';

  }

  sendButton(input) {
    const { value } = input;
    this.sendMessage(input);
  }

}
