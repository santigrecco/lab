import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.less']
})
export class ForumComponent implements OnInit {
  @Input() lab;
  customClass: string = 'customClass';

  constructor() {}

  ngOnInit() {
  }

}
