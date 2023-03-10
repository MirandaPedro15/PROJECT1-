import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //VARIABLES//
  public email: string="" ;
  public password:string="";
  public serviceError: boolean=false; //NO LOGUEO
  mensajeError:any='';
  login(){
    console.log (this.alertSucces())
  }
  ///////////////////////////////////////////////////////
  //ROUTING//
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
  alertSucces(){
    Swal.fire({
      icon: 'success',
      width:400,
      title: 'Login con éxito',
    showConfirmButton: false,
      timer: 1500
    })
     }
  alertError(){
     Swal.fire({
     //position: 'center-end',
      icon: 'error',
      width:400,
      title: this.mensajeError,
      showConfirmButton: false,
      timer: 1500
    })
     }
    }
