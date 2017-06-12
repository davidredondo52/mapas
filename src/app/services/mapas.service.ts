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
     this.guardarMarcadores();
   }

   guardarMarcadores()
   {
     localStorage.setItem('marcadores',JSON.stringify(this.marcadores));
   }
   cargarMarcadores()
   {
     if(localStorage.getItem('marcadores')){
       this.marcadores=JSON.parse(localStorage.getItem('marcadores'));
     }
     else{
       this.marcadores=[];
     }
   }

   borrarMarcador(i:number)
   {
     
     this.marcadores.splice(i,1);
    
      this.guardarMarcadores();
   }
 }


