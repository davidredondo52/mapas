import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interface';
@Injectable()
export class MapasService {

  marcadores:Marcador[]=[];
  constructor() { 
  	let nuevoMarcador={
  		lat : 40.417130,
        lng:  -3.706539,
        titulo:"Joy Eslava",
  		draggable:true
  	}
  	this.marcadores.push(nuevoMarcador);

  }
   nuevoMarcador(marcador:Marcador){
   	this.marcadores.push(marcador);
   }
}
