import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent {
  constructor (public router: Router){}
  goToLogin(){
  this.router.navigate(['login'])
  }


}
