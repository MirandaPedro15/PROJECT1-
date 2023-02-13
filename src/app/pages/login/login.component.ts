import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //VARIABLES
  dni:string='';
  password: string ='';
  login(){
    console.log(this.dni)
    console.log(this.password)
  }

  ///////////////////////////////////////////////////////
  //ROUTING
  constructor(public router : Router){}

  goToRegister(){
    this.router.navigate(['register'])
  }
  goToHome(){
    this.router.navigate(['home'])
  }
  goToRecovery(){
    this.router.navigate(['recovery'])
  }
}
