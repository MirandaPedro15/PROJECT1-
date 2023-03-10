import { Injectable } from '@angular/core';
import { API_ENDPOINT } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Salas } from '../app/pages/home/salas';
@Injectable({
  providedIn: 'root'
})
export class SalasService {
  public Salas:Salas[]=[{
    "id": 1,
    "name": "SALA 01"
  },
    {
    "id": 2,
    "name": "SALA 02"
  },
    {
    "id": 3,
    "name": "SALA 03"
  },
    {
    "id": 4,
    "name": "SALA 04"
  },
    /* {
    "id": 5,
    "name": "CINEANK"
  } */
];
  constructor(public http: HttpClient) { }

  getSalas():Salas[]{
      return this.Salas;
  }
}
