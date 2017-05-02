import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-proposals',
  templateUrl: './my-proposals.component.html',
  styleUrls: ['./my-proposals.component.less']
})
export class MyProposalsComponent implements OnInit {
  public proposedLabs: any  = [
    {
      name: 'App Development',
      proposalDate: new Date('8/21/2016'),
      status: 'active',
      managerComments: "We need to make another lab after this, more oriented to Front End"
    },
    {
      name: 'Responsive Design',
      proposalDate: new Date(),
      status: 'published',
      managerComments: "Great Idea"
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
