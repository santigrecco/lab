import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-lab',
  templateUrl: './edit-lab.component.html',
  styleUrls: ['./edit-lab.component.less']
})
export class EditLabComponent implements OnInit {
  userRank: String;
  fileName: String = '';
  imageSrc: String = '#';
  tagsArray:Array<String> = [];
  labData: any = {
    name: 'A Name',
    active: false,
    image: {
      name: '',
      src: ''
    },  
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eveniet veniam error nisi inventore, fugiat aliquam dolores voluptate, magni quod eum laborum doloribus',
    repository: 'http://www.github.com/somerepo',
    jiraUrl: 'http://www.someurl.com',
    tags: [
      'HTML',
      'CSS',
      'JS'
    ],
    instructions: [
      'git clone http://www.github.com/somerepo',
      'git pull',
      'cd somerepo',
      'ng serve',
      'git clone http://www.github.com/somerepo',
      'git pull',
      'cd somerepo',
      'ng serve',
      'git clone http://www.github.com/somerepo',
      'git pull',
      'cd somerepo',
      'ng serve'
      
    ]
  };
  

  constructor() {
    if(this.labData != undefined) {
      this.tagsArray = this.labData.tags;
    }
   }

  ngOnInit() {
  }
  
  statusChanged(status) {
    if(status === 'active') {
      this.labData.active = true;
    } else {
      this.labData.active = false;
    }

  }

  fileValueChange(input) {
    this.fileName = input.files[0].name;
    this.labData.image.name = this.fileName;
    let reader = new FileReader();
    reader.onload = (e: Event) => {
      this.imageSrc = reader.result;
      this.labData.image.src = reader.result;      
    }
    reader.readAsDataURL(input.files[0])
   }

  browseClick() {
    this.fileName = '';
    this.imageSrc = '#';
  }

  addTag(input) {
     const array = this.tagsArray.map(el=>el.toLowerCase());
     const { value } = input;
     if(  value.length > 0 && array.indexOf(value.toLowerCase()) === -1) {
       this.tagsArray.push(input.value);
       input.value = '';
    } 

   }
  removeTag(tag) {
    const index = this.tagsArray.indexOf(tag);
    this.tagsArray.splice(index, 1);
  }


}
