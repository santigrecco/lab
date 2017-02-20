import { Injectable } from '@angular/core';

@Injectable()
export default class LabsService {
  labs = [
    {name: 'Rocket science', author: 'some'},
    {name: 'Nature something', author: 'some other'},
    {name: 'Design ', author: 'nobody'}
  ]
  constructor() { }

  addLab(name, author) {
    this.labs.push({name: name, author: author})
  }
}
