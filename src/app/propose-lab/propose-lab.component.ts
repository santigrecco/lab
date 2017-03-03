import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propose-lab',
  templateUrl: './propose-lab.component.html',
  styleUrls: ['./propose-lab.component.less']
})
export class ProposeLabComponent implements OnInit {
  fileName: String = ''

  constructor() { }

  ngOnInit() {
  }

 fileValueChange(input) {
  this.fileName = input.files[0].name;
  
 } 
 browseClick() {
   this.fileName = '';
 }
}
