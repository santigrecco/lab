import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propose-lab',
  templateUrl: './propose-lab.component.html',
  styleUrls: ['./propose-lab.component.less']
})
export class ProposeLabComponent implements OnInit {
  fileName: String = '';
  tagsArray:Array<String> = [];
  name: String = '';
  description: String= '';
  error: Bool = false;

  constructor() { }

  ngOnInit() {
  }

 fileValueChange(input) {
  this.fileName = input.files[0].name;

 }
 browseClick() {
   this.fileName = '';
 }
 addTag(event, input) {
   const array = this.tagsArray.map(el=>el.toLowerCase());
   const { value } = input;
   if( event.key === 'Enter' && value.length > 0 && array.indexOf(value.toLowerCase()) === -1) {
     this.tagsArray.push(input.value);
     input.value = '';
   }
 }
 removeTag(tag) {
   const index = this.tagsArray.indexOf(tag);
   this.tagsArray.splice(index, 1);
 }
 submit(nameInput, descriptionInput, fileInput) {
   const nameNoSpaces = this.name.replace(/^\s+/, '').replace(/\s+$/, '');
   const descNoSpaces = this.description.replace(/^\s+/, '').replace(/\s+$/, '');
   if(nameNoSpaces === '' || descNoSpaces === '' || this.tagsArray.length === 0) {
     this.error = true;
   }
 }

}
