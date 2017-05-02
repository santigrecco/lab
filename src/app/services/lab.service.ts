import { Injectable } from '@angular/core';

@Injectable()
export class LabService {

  constructor() { }

  getLab(id) {
    return {
      name: '',
      image: {
        name: '',
        src: 'assets/programming-image.jpg'
      },
      tags: [
        'HTML',
        'CSS',
        'JS',
        'Angular',
        'HTML',
        'CSSss',
        'JS',
        'Angular',
        'HTML',
        'CSS',
        'JS',
        'Angular'
      ],
      repository: 'http://www.github.com/somerepo',
      jiraUrl:'jira.globant.com/lab',
      status: 'published',
      activeMembers: [
        {name: 'Natalia'},
        {name: 'Juan'},
        {name: 'German'},
      ],
      likes: [
          {name: 'Natalia'},
          {name: 'Roberto'},
          {name: 'German'},
          
      ],
      wouldJoin: [
          {name: 'Natalia'},
          {name: 'Roberto'},
          {name: 'German'}
      ],
      instructions: [
        'git clone http://www.github.com/somerepo',
        'cd somerepo',
        'npm i',
        'ng serve'
      ],
      team:[
        {name: 'chuck norris', role:'owner', status:'active', id: 1928373},
        {name: 'jon snow', role:'member', status: 'unsuscribed', id: 1928},
        {name: 'tyrion lannister', role:'member', status: 'active', id: 8373},
        {name: 'chuck norris again', role:'owner', status: 'unsuscribed', id: 1973}
      ]

    }
  }
}
