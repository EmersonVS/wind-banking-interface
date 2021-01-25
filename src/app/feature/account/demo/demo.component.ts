import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/class/user';
import { AccountCardInfo } from 'src/app/shared/interface/account-card-info';
import { FinancialService } from 'src/app/shared/services/financial/financial.service';
import { TokenGenerationService } from 'src/app/shared/services/token/token-generation.service';
import { TokenStorageService } from 'src/app/shared/services/token/token-storage.service';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  demoAccountInfo : Array<User> = environment.demoAccounts;
  demoAccountCardInfo : Array<AccountCardInfo> = [];

  constructor(private tokenGenerationService : TokenGenerationService, private tokenStorageService : TokenStorageService, private financialService : FinancialService) { 
    this.getAccountCardInfo();
  }

  ngOnInit() {
  }

  getAccountCardInfo = () => {
    this.demoAccountInfo.forEach(accountInfo => {
      const tokenRequest = this.tokenGenerationService.tokenRequest(accountInfo);
      this.storageToken(accountInfo, tokenRequest);
      const balanceRequest = this.financialService.getBalanceInfo(accountInfo);
      this.getBalance(balanceRequest)
    })
  }


  storageToken = (accountInfo, tokenRequest) => {
    tokenRequest.subscribe(tokenResponse => {
      this.tokenStorageService.setToken(accountInfo.username, tokenResponse);
    })
  }

  getBalance = (balanceRequest)  => {
    balanceRequest.subscribe(balanceResponse => {
      this.demoAccountCardInfo.push(balanceResponse);
    })
  }

}
