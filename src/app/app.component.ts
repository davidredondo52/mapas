import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


 
  lat: number = 40.417130;
  lng: number = -3.706539;
  zoom:number=16;

  marcadorSel:any=null;
  draggable:string="1";

  constructor(private _mapService:MapasService)
  {
    this._mapService.cargarMarcadores();
  }

  clickMapa(evento)
  {
    let nuevoMarcador:Marcador={
      lat:evento.coords.lat,
      lng:evento.coords.lng,
      titulo:'Sin titulo',
      draggable:true
    }
  	console.log(evento);
    this._mapService.nuevoMarcador(nuevoMarcador);

  }

  clickMarcador(marcador:Marcador,i:number)
  {
      this.marcadorSel=marcador;
    
      if(this.marcadorSel.draggable)
      {
        this.draggable="1"
      }
      else
      {
        this.draggable="0"
      }
    }

  dragEndMarcador(marcador:Marcador,evento)
   {
     console.log(marcador);
     console.log(evento);
     let lat=evento.coords.lat;
     let lng=evento.coords.lng;
     marcador.lat=lat;
     marcador.lng=lng;
     this._mapService.guardarMarcadores();
   }

   borrarMarcador(i:number)
   {
     
     this._mapService.borrarMarcador(i);
     this.marcadorSel=null;
   }

   cambiarDraggable()
   {
     if(this.draggable=="1")
     {
       this.marcadorSel.draggable=true;
     }
     else
     {
      this.marcadorSel.draggable=false;
     }
   
   }
}

