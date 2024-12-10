import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionServiceService {

  constructor() { }

  private cantidadBeha = new BehaviorSubject<number>(0);
  cantidadSeleccionada$ = this.cantidadBeha.asObservable();

  getCantidad():number{
    return this.cantidadBeha.getValue();
  }

  meterCantidad(nuevaCantidad:number){
    this.cantidadBeha.next(nuevaCantidad);
    console.log('Cantidad actualizada desde servicio a: ', nuevaCantidad);
  }


  private listaBehavior = new BehaviorSubject<string[]>([]);
  listaSeleccionada$ = this.listaBehavior.asObservable();

  getLista():string[]{
    return this.listaBehavior.getValue();
  }
 
  meterString(nuevoString: string){
    let listaActual = this.listaBehavior.getValue();
    listaActual.push(nuevoString);
    this.listaBehavior.next(listaActual);
    console.log('Lista actualizada desde servicio a: ', listaActual);

  }


  

}
