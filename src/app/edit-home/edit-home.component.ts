import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.less']
})
export class EditHomeComponent implements OnInit {
  fileName: String = '';
  imageSrc: String = '#';
  
  constructor() { }

  ngOnInit() {
  }

  fileValueChange(input) {
    this.fileName = input.files[0].name;
    let reader = new FileReader();
    reader.onload = (e: Event) => {
      this.imageSrc = reader.result;      
    }
    reader.readAsDataURL(input.files[0])
   }
  browseClick() {
    this.fileName = '';
    this.imageSrc = '#';
  }

}
