import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lab-info',
  templateUrl: './lab-info.component.html',
  styleUrls: ['./lab-info.component.less']
})
export class LabInfoComponent implements OnInit {
  lab: any = {
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
    status: 'published',
    activeMembers: [
      {name: 'Natalia'},
      {name: 'Pablo'},
      {name: 'German'},
    ],
    likes: [
        {name: 'Natalia'},
        {name: 'Pablo'},
        {name: 'German'},
        
    ],
    wouldJoin: [
        {name: 'Natalia'},
        {name: 'Pablo'},
        {name: 'German'}
    ],
    instructions: [
      'git clone http://www.github.com/somerepo',
      'cd somerepo',
      'npm i',
      'ng serve'
    ],
    team:[
      {name: 'chuck norris', role:'owner', status:'active'},
      {name: 'jon snow', role:'member', status: 'unsuscribed'},
      {name: 'tyrion lannister', role:'member', status: 'active'},
      {name: 'chuck norris again', role:'owner', status: 'unsuscribed'}
    ]

  }
  constructor(private route: ActivatedRoute) {
    this.getLab();
   }

  ngOnInit() {
  }
  
  leave() {
    alert('leave');
  }

  getLab() {
    this.lab.name = this.route.snapshot.params['lab'];

  }

}


