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
actualDay:any;
diasAgenda:any=[];
dayLength:any;
viewDay:any;
mostrarForm:boolean=false;
nombreSala:any;
nombreDay:any;
hours:any=[];
salas: any;
viewLateral:any='';
  salasService: any;

  constructor (){}
  ngOnInit():void{
    this.mes = new Date().getMonth() +1;
    this.anio =  new Date().getFullYear()
    this.actualDay={
      name: '',
      value: '',
      day:new Date().getDate(),
      indexWeek: '',
  }
  this.getMes(this.mes);
  this.getSalas();
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
      /* this.mesView.num=1
      this.getMes(this.mesView.num) */
    }else if(this.mesView.num+value == 0){
      /* this.mesView.num=12;
      this.getMes(this.mesView.num) */
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
    //this.diasAgenda.unshift(salaDesc)
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
}

