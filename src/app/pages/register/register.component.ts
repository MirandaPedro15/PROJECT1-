import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(public router: Router){}
    //VARIABLES//
    NuevoEmail:string='';
    Nuevopassword: string ='';
    login(){
      console.log(this.NuevoEmail)
      console.log(this.Nuevopassword)
    }

  goToLogin(){
    this.router.navigate(['login']);
  }
}
