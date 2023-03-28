import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SalasService } from 'src/app/salas.service';
import { Salas } from './salas.interface';
import * as moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  daysMonth: any=[];
  monthYear: any=[
   {num:1,nom:'Enero'},
   {num:2,nom:'Febrero'},
   {num:3,nom:'Marzo'},
   {num:4,nom:'Abril'},
   {num:5,nom:'Mayo'},
   {num:6,nom:'Junio'},
   {num:7,nom:'Julio'},
   {num:8,nom:'Agosto'},
   {num:9,nom:'Setiembre'},
   {num:10,nom:'Octubre'},
   {num:11,nom:'Noviembre'},
   {num:12,nom:'Diciembre'}
];
mesView:any;
mes:any;
anio:any;
day:any;
actualDay:any;
diasAgenda:any
dayLength:any;
viewDay:any;
mostrarForm:boolean=false;
nombreSala:any;
nombreDay:any;
hours:any=[];
hour:any=[];
salas: Salas[]=[];
viewLateral:any='';
  cssHora: any;

  constructor (private salasService : SalasService){}
  ngOnInit():void{
    this.mes = new Date().getMonth() +1;
    console.log('uno')
    this.anio =  new Date().getFullYear()
    console.log('dos')
    if(this.mes){
      console.log('tres')
      this.actualDay={
        name: '',
        value: '',
        day:new Date().getDate(),
        indexWeek: '',
    }
    }
    this.getMes(this.mes);
this.getSalas();
this.getHour();
this.armarAgenda(this.actualDay);
this.goSala;
}
diasCalendario(month:any,year:any){
  console.log(month,year)

  const startDate = moment.utc(`${year}/${month}/01`)
  const endDate = startDate.clone().endOf('month')
  const diffDays = endDate.diff(startDate, 'days', true)
  const numberDays = Math.round(diffDays);

  const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
    a = parseInt(a) + 1;
    let day=a;
    if(a < 10){
      a= '0'+ a;
    }
    const dayObject = moment(`${year}-${month}-${a}`);
    return {
      name: dayObject.format("dddd"),
      value: a,
      day:day,
      indexWeek: dayObject.isoWeekday(),
      mes:month,
      anio:year
    };
  });
  this.daysMonth = arrayDays;

}
getHour(){

  let tiempo:any;
  this.hour={
    hora:'07:00',
    isSelect:false,
    ocupado:false
  }
  for(var i = 0 ; i < 23; i++){
    this.hours.push(this.hour)

    tiempo = new Date("2000-01-01T" + this.hour.hora + ":00Z");
    if (isNaN(tiempo)) {
      tiempo = new Date("2000-01-01T00:00:00Z");
    }
    tiempo.setMinutes(tiempo.getMinutes() + 30);
    console.log(tiempo)
    this.hour = {
      hora:tiempo.toISOString().substr(11, 5),
      isSelect:false,
      ocupado:false
    }
    console.log(this.hours)
    console.log(this.hour)
  }
}

getSalas(){
  this.salas = this.salasService.getSalas();
  console.log(this.salas)
}
  getMes(month:any){
    console.log(month)
    let objMes = this.monthYear.find((element:any) => element.num === month)
    console.log(objMes)
    this.mesView = objMes;
    this.diasCalendario(this.mesView.num,this.anio);
  }
  changeMonth(value:any){
    this.viewDay='';
    console.log(this.mesView.num+value)
    if(this.mesView.num+value == 13){
    }else if(this.mesView.num+value == 0){
    }else{
      this.getMes(this.mesView.num+value)
    }
  }
  changeYear(value:any){
    this.viewDay=''
    this.anio +=value;
    this.diasCalendario(this.mesView.num,this.anio);
  }
  armarAgenda(selectDay:any){
    console.log(selectDay)
    this.viewDay= selectDay;
    this.diasAgenda = this.daysMonth.filter((day:any) => day.day >= selectDay.day).slice(0,7);
    let salaDesc={
      name: 'Salas',
      value: '',
      day:'',
      indexWeek: '',
      mes:'',
      anioo:''
    }
    this.dayLength=this.diasAgenda.length;
  }
  goSala(sala:any,day:any){
    console.log(sala,day)
    this.mostrarForm=true;
    this.viewLateral='Sala';
    this.nombreSala=sala.name;
    this.nombreDay=day.name + ' ' + day.day;
    console.log(this.nombreSala, this.nombreDay)
  }
  close(){
    this.mostrarForm=false;
  }
  viewHora(value:any,index:any){
    this.cssHora=value;
    this.hours.forEach((element:any) => {
      element.isSelect=false;
    });
    this.hours[index].isSelect=true;
  }
  ocuparHorario(horario:any){
    let horaOperacion:any= new Date("2000-01-01T" + '03:00' + ":00Z");

    let tiempoInicio = new Date("2000-01-01T" + horario.hora + ":00Z");
    console.log(horaOperacion + tiempoInicio)

    let tiempoFin = tiempoInicio.getHours() + horaOperacion.getHours();
    console.log(horaOperacion.getHours(),tiempoInicio.getHours(),tiempoFin)
    console.log(tiempoInicio,tiempoInicio.getHours() +5)
    this.hours.forEach((element:any) => {
          let temp = new Date("2000-01-01T" + element.hora + ":00Z");
          //if()
    });
  }
  closeCont(index:any){
    console.log(index)
    this.cssHora='';
    this.hours[index].isSelect=false;
  }
  goNewPetitorio(){
    this.mostrarForm=true;
    this.viewLateral='NewPetitorio'
  }
  goReservas(value:any){
    this.mostrarForm=true;
    this.viewLateral=value;
    console.log(this.viewLateral)
  }
}
