import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../class/user';
import { environment } from '../../../../environments/environment'
import { AccountCardInfo } from '../../interface/account-card-info';
import { TokenStorageService } from '../token/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class BalanceInfoService {

constructor(private http : HttpClient, private tokenStorageService : TokenStorageService) { }

  getBalanceInfo(user : User) {
    const headers = {
      Authorization: this.tokenStorageService.getToken(user.username)
    }
    return this.http.get<AccountCardInfo>(environment.endpoints.financial.balance, { headers });
  }
}
