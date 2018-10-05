import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { PermissionsService } from '../../../services/permissions.service';


@Component({
  templateUrl: './clouds-list.component.html'
})

export class CloudsListComponent implements OnInit {

  // BEGIN ALERT MESSAGING
  alertMsg:string = '';
  setMsg(msg:string):void {
    this.alertMsg = msg;
  }
  showSuccess:boolean = false;
  showError:boolean = false;
  hideMessages() {
    this.showSuccess = false;
    this.showError = false;
  }
  // END ALERT MESSAGING

  currentAccount: any;
  currentUser:any;
  currentPermissions:any;
  hasCardOnFile:any;

  constructor(private permissionsService: PermissionsService,private dataService:DataService) {

  }

  ngOnInit(): void {
    // Get CompanyObject
    this.dataService.currentAccount.subscribe(account => this.currentAccount = account);
    // Get Logged in user
    this.dataService.currentUser.subscribe(user => this.currentUser = user);
    // Get CurrentPermissions
    this.permissionsService.currentPermissions.subscribe(permissions => this.currentPermissions = permissions);
    this.permissionsService.hasCardOnFile.subscribe(status => this.hasCardOnFile = status);
    this.permissionsService.updatePermissions();
  }

}
