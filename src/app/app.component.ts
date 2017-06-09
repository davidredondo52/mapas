import { Component } from '@angular/core';
import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  lat: number = 40.417130;
  lng: number = -3.706539;
  zoom:number=16;

  constructor(private _mapService:MapasService)
  {

  }

  clickMapa(evento){
    let nuevoMarcador:Marcador={
      lat:evento.coords.lat,
      lng:evento.coords.lng,
      titulo:'Sin titulo',
      draggable:true
    }
  	console.log(evento);
    this._mapService.nuevoMarcador(nuevoMarcador);
  }
}
