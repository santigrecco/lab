import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {
  @Input() lab;
  public tasks = {
    pending: [
      [ {name: 'Unit Testing', fullDuration: '7hs', finished:0}],
      [ {name: 'Unit Testing', fullDuration: '7hs', finished:0}],
      [ {name: 'Unit Testing', fullDuration: '7hs', finished:0}]
    ],
    inProgress: [
      [ {name: 'Functional Testing', fullDuration: '7hs', finished:70}],
      [ {name: 'Programming stuff', fullDuration: '10hs', finished:40}],
      [ {name: 'Programming stuff', fullDuration: '10hs', finished:40}]
    ],
    testing: [],
    done: [
      [{name: 'Backend Development', fullDuration: '7hs', finished:100}]
    ]
  
  }
  constructor() { }

  ngOnInit() {
  }
  
  copyToClipboard(jiraUrl) {
    jiraUrl.select();
    document.execCommand('copy');  
  }
}
