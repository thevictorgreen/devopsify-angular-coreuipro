import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {


  constructor( private authService: AuthService, private router: Router, private zone: NgZone ) { }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
      //this.zone.run(() => { this.router.navigate(['/company-login']) });
      this.zone.run(() => { this.router.navigate(['/user-authorize']) });
    })
    .catch((err) => console.log(err));
  }
}
