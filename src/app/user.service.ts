import { Injectable } from '@angular/core';
import { API_ENDPOINT } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private SERVER = API_ENDPOINT;
  private user = this.SERVER + '/users';
  //VAR PARA ALMACENAR DATA
  public dataSend:any;
  public correoGlobal:any;
  public dataLogin:any;
  constructor(public http: HttpClient) { }

  newLogin(documentNumber: string,password:string){
    let params = {'usuario':documentNumber,
                  'clave':password};
     return this.http.post(this.user + '/login', params).pipe(
       map(resp => {
         return resp
       }), err => {
        return err
    })
  }
  //ENVIAR CORREO
  recoveryLogin(datos:any){
  let params = datos;
    return this.http.post(this.user + '/send-code-recovery', params,{responseType: 'text'}).pipe(
                    map(data => {
                      return data
                    })
    )
  }
  //REESTABLECER CONTRASEÑA
  loginRecovery(datos:any){
  let params = datos;
    return this.http.post(this.user + '/validate-recovery', params, {responseType: 'text'}).pipe(
                    map(data => {
                      return data
                    })
    )
  }
  validarDataRegister(data:any){
    return this.http.post(this.user + '/getDocumentoDataByTipoDocumento', data, {responseType: 'text'}).pipe(
      map(data => {
        return data
      })
    )
  }
  validarDataDependiente(data:any){
    return this.http.post(this.user + '/getDocumentoDataByTipoDocumentoDAC', data, {responseType: 'text'}).pipe(
      map(data => {
        return data
      })
    )
  }
  newRegister(data:any){
    return this.http.post(this.user + '/registrar', data, {responseType: 'text'}).pipe(
      map(data => {
        return data
      })
    )
  }

}

