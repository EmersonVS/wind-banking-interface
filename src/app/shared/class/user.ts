import { AccountBasicInfo } from "../interface/account-basic-info";

export class User {

    username: string;
    password: string;

    constructor (accountInfo : AccountBasicInfo) {
        this.username = accountInfo.username;
        this.password = accountInfo.password;
    }
}
