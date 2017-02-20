import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (@Inject('labs') private Labs) {}

  newLab(name, author) {
    this.Labs.addLab(name, author)
  }

}
