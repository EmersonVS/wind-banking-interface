import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  hasToken(storageKey) {
    return !!this.getToken(storageKey);
  }

  setToken(storageKey, tokenKey) {
    window.localStorage.setItem(storageKey, `${tokenKey.type} ${tokenKey.token}`);
  }

  getToken(storageKey) {
    return window.localStorage.getItem(storageKey);
  }

  removeToken(storageKey) {
    window.localStorage.removeItem(storageKey);
  }

}
