import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-unsuscribe-req',
  templateUrl: './join-unsuscribe-req.component.html',
  styleUrls: ['./join-unsuscribe-req.component.less']
})
export class JoinUnsuscribeReqComponent implements OnInit {

  public joinRequests: Array<any> = [
    {
      name: 'App Development',
      requestDate: new Date('8/21/2016'),
      requestStatus: 'active',
      labStatus: 'active',
      managerComments: "We need to make another lab after this, more oriented to Front End"
    },
    {
      name: 'UX Lab',
      requestDate: new Date('8/21/2016'),
      requestStatus: 'pending',
      labStatus: 'active',
      managerComments: ""
    },
    {
      name: 'App Development',
      requestDate: new Date('8/21/2016'),
      requestStatus: 'rejected',
      labStatus: 'closed',
      managerComments: "The lab was closed"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
