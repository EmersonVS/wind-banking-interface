import { Component, Input, OnInit } from '@angular/core';
import { AccountBasicInfo } from 'src/app/shared/interface/account-basic-info';
import { AccountCardInfo } from 'src/app/shared/interface/account-card-info';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input() demoAccountInfo : Array<AccountBasicInfo> = [
    {
      username: "demoAccount1",
      password: "123",
      id: "1"
    },
    {
      username: "demoAccount2",
      password: "123",
      id: "2"
    },
    {
      username: "demoAccount3",
      password: "123",
      id: "3"
    }
  ]

  @Input() demoAccountCardInfo : Array<AccountCardInfo> = [
    {
      saldoCC: 14000,
      saldoPP: 14000
    },
    {
      saldoCC: 11000,
      saldoPP: 11000
    },
    {
      saldoCC: 18000,
      saldoPP: 18000
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
