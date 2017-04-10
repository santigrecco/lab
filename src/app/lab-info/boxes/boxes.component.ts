import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.less']
})
export class BoxesComponent implements OnInit {
  @Input() lab;
  constructor() { }

  ngOnInit() {
  }

}
