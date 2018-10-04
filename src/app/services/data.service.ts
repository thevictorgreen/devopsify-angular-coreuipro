import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


const INIT_USER = {
  uid: undefined,
  email: undefined,
  displayName: undefined,
  photoURL: undefined
};


@Injectable()
export class DataService {

  private userSubject = new BehaviorSubject(INIT_USER);
  public currentUser: Observable<any> = this.userSubject.asObservable();
  changeUser(user:any): void {
    this.userSubject.next(user);
  }

  private accountSubject = new BehaviorSubject({});
  public currentAccount: Observable<any> = this.accountSubject.asObservable();
  updateAccount(account:any): void {
    this.accountSubject.next(account);
  }

  constructor() {}
}
