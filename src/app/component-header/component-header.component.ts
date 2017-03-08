import { Component, OnInit, Input } from '@angular/core';

/*
  this component is used to create component's headers, it receive a title and
  a breadcrum with an array of previous pages and respective links
  ex
  title = 'title'
  [breadcrumb]= "[{name: 'previous', link: '/link'},{name: 'previous2', link: '/link2'}]" 
*/

@Component({
  selector: 'app-component-header',
  templateUrl: './component-header.component.html',
  styleUrls: ['./component-header.component.less']
})
export class ComponentHeaderComponent implements OnInit {

  @Input() breadcrumb;
  @Input() title:String;

  constructor() {
  }

  ngOnInit() {
  }

}
