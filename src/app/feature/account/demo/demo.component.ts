import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/class/user';
import { AccountBasicInfo } from 'src/app/shared/interface/account-basic-info';
import { AccountCardInfo } from 'src/app/shared/interface/account-card-info';
import { BalanceInfoService } from 'src/app/shared/services/account/balance-info.service';
import { TokenGenerationService } from 'src/app/shared/services/token/token-generation.service';
import { TokenStorageService } from 'src/app/shared/services/token/token-storage.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  demoAccountInfo : Array<AccountBasicInfo> = [
    {
      username: "demoAccount1",
      password: "123",
      id: "2"
    },
    {
      username: "demoAccount2",
      password: "123",
      id: "4"
    },
    {
      username: "demoAccount3",
      password: "123",
      id: "6"
    }
  ]

  demoAccountCardInfo : Array<AccountCardInfo> = [];

  constructor(private tokenGenerationService : TokenGenerationService, private tokenStorageService : TokenStorageService, private balanceInfoService : BalanceInfoService) { 
    this.getAccountCardInfo();
  }

  ngOnInit() {
  }

  getAccountCardInfo = () => {
    this.demoAccountInfo.forEach(accountInfo => {
      const userMapped = this.mapInfoAsUser(accountInfo);
      const tokenRequest = this.tokenGenerationService.tokenRequest(userMapped);
      this.storageToken(userMapped, tokenRequest);
      const balanceRequest = this.balanceInfoService.getBalanceInfo(userMapped);
      this.getBalance(balanceRequest)
    })
  }

  mapInfoAsUser = (accountInfo) => {
    return new User(accountInfo);
  }

  storageToken = (userMapped, tokenRequest) => {
    tokenRequest.subscribe(tokenResponse => {
      this.tokenStorageService.setToken(userMapped.username, tokenResponse);
    })
  }

  getBalance = (balanceRequest)  => {
    balanceRequest.subscribe(balanceResponse => {
      this.demoAccountCardInfo.push(balanceResponse);
    })
  }

}
