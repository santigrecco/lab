import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.less']
})
export class RepositoryComponent implements OnInit {
  @Input() lab;
  constructor() {
  }

  ngOnInit() {
    while(this.lab.instructions.length < 10) {
      this.lab.instructions.push('');
    }
  }

  copy(repository, copy) {
    repository.select();
    document.execCommand('copy');
  }
}
