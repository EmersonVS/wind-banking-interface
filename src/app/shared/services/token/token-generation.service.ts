import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { TokenResponse } from '../../interface/token-response';
import { TokenStorageService } from './token-storage.service';
import { User } from '../../class/user';

@Injectable({
  providedIn: 'root'
})
export class TokenGenerationService {

constructor(private http : HttpClient) { 

}

  tokenRequest(user : User) {
      return this.http.post<TokenResponse>(environment.endpoints.auth, user);
  }

}
