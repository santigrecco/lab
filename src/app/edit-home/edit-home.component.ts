import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-home',
  templateUrl: './edit-home.component.html',
  styleUrls: ['./edit-home.component.less']
})
export class EditHomeComponent implements OnInit {
  public fileName: String = '';
  public imageSrc: String = '#';
  public description: String = '';
  public error: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  fileValueChange(input) {
    if(input.files[0]) {
      this.fileName = input.files[0].name;
      let reader = new FileReader();
      reader.onload = (e: Event) => {
        this.imageSrc = reader.result;      
      }
      reader.readAsDataURL(input.files[0])
    }
    
   }
  browseClick() {
    this.fileName = '';
    this.imageSrc = '#';
  }

  _handleText(text) {
    this.description = text;
  }

  save(errorModal) {
    if(this.imageSrc == '#' && this.description == ''){
      errorModal.show();
    }
          
  }
}
