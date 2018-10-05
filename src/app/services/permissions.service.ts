import { Injectable } from  '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataService } from './data.service';


const INIT_HAS_CARD_ON_FILE = true;

const INIT_PERMISSIONS = {
  billing_read: false,
  billing_write: false,
  company_profile_read: false,
  company_profile_write: false,
  user_profile_read: true,
  user_profile_write: false,
  groups_read: false,
  groups_write: false,
  users_read: false,
  users_write: false,
  clouds_read: false,
  clouds_write: false,
  domains_read: false,
  domains_write: false,
  namespaces_read: false,
  namespaces_write: false,
  projects_read: false,
  projects_write: false,
  services_read: false,
  services_write: false,
  servers_read: false,
  applications_read: false,
  applications_write: false
}


@Injectable()
export class PermissionsService {

  currentAccount: any;
  currentUser:any;

  private cardCheckSubject = new BehaviorSubject(INIT_HAS_CARD_ON_FILE);
  public hasCardOnFile: Observable<any> = this.cardCheckSubject.asObservable();
  private permissionsSubject = new BehaviorSubject(INIT_PERMISSIONS);
  public currentPermissions: Observable<any> = this.permissionsSubject.asObservable();

  updatePermissions(): void {
    // Update Payment Status
    this.cardCheckSubject.next( this.currentAccount.company.company_billing.has_card );
    // Update Permissions
    var uid = this.currentUser.uid;
    var user_role = '';
    for (var i = 0;i < this.currentAccount.company.authorized_users.length;i++) {
      if (uid == this.currentAccount.company.authorized_users[i].user_id) {
        user_role = this.currentAccount.company.authorized_users[i].user_role;
        break;
      }
    }
    for (var i = 0;i < this.currentAccount.company.roles.length;i++) {
      if (user_role == this.currentAccount.company.roles[i].role_name) {
        this.permissionsSubject.next(this.currentAccount.company.roles[i].permissions);
        break;
      }
    }
  }

  constructor(private dataService: DataService) {
    // Get CompanyObject
    this.dataService.currentAccount.subscribe(account => this.currentAccount = account);
    // Get Logged in user
    this.dataService.currentUser.subscribe(user => this.currentUser = user);
  }
}
