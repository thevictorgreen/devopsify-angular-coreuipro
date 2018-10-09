import { Component, Input, OnInit } from '@angular/core';
import { navItems } from './../../_nav';
import { DataService } from '../../services/data.service';
import { PermissionsService } from '../../services/permissions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

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

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
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
    //console.log(this.currentAccount);
  }
}
