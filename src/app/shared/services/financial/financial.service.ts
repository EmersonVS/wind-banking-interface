import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../class/user';
import { environment } from '../../../../environments/environment'
import { AccountCardInfo } from '../../interface/account-card-info';
import { TokenStorageService } from '../token/token-storage.service';
import { FinancialTransfer } from '../../interface/financial-transfer';
import { FinancialBasic } from '../../interface/financial-basic';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {

  constructor(private http : HttpClient, private tokenStorageService : TokenStorageService) { }

  getBalanceInfo(user : User) {
    const headers = {
      Authorization: this.tokenStorageService.getToken(user.username)
    }
    return this.http.get<AccountCardInfo>(environment.endpoints.financial.balance, { headers });
  }

  postTransfer(user : User, financialTransfer : FinancialTransfer) {
    const headers = {
      Authorization: this.tokenStorageService.getToken(user.username)
    }
    return this.http.post<any>(environment.endpoints.financial.transfer, financialTransfer, { headers });
  }

  postSave(user : User, financialBasic : FinancialBasic) {
    const headers = {
      Authorization: this.tokenStorageService.getToken(user.username)
    }
    return this.http.post<any>(environment.endpoints.financial.save, financialBasic, { headers });
  }

  postRedeem(user : User, financialBasic : FinancialBasic) {
    const headers = {
      Authorization: this.tokenStorageService.getToken(user.username)
    }
    return this.http.post<any>(environment.endpoints.financial.redeem, financialBasic, { headers });
  }
}
