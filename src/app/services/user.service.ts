import { Injectable } from '@angular/core';

@Injectable()
export class UserService{
  private fakeUsers: Array<any> = [
    {username: 'user', password: '1234', rank: 'user', image: 'aUrl', id: 0},
    {username: 'manager', password: '1234', rank: 'manager', image: 'aUrl2', id: 1, name: 'Santiago', lastname: 'Grecco'},
    {username: 'labOwner', password: '1234', rank: 'labOwner', image: 'aUr3', id: 2},
  ];
  private userData: Object = {};

  constructor() {}

  getUserData() {
    // return this.userData;
    return this.fakeUsers[0];
  }

  authentication(username, password) {
    const index = this.fakeUsers.map((el) => el.username).indexOf(username);
    if((index !== -1) && (password === this.fakeUsers[index].password)) {
      this.userData = this.fakeUsers[index];
      return 'Logged In';
    } else {
      if(index === -1){
        return 'Wrong Credentials'
      } else {
        return 'Not Registered'
      }
        
    }
  }
}
