import { Component } from '@angular/core';
import { ComunicacionServiceService } from '../shared/service/comunicacion-service.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss']
})
export class Componente1Component {

  constructor(private servicio:ComunicacionServiceService) { 

  }

  cantidadComponente1!:number;
  listaComponente1!:string[];
  nuevaPalabra!:string;


  ngOnInit(){
    this.servicio.cantidadSeleccionada$.subscribe(cantidad =>{
      this.cantidadComponente1 = cantidad;
    })
    this.servicio.listaSeleccionada$.subscribe(lista =>{
      this.listaComponente1 = lista;
    })

  }
  meterCantidad(){
    this.cantidadComponente1++;
   this.servicio.meterCantidad(this.cantidadComponente1);
  }

  meterString(): void {
    if (this.nuevaPalabra) {
      this.servicio.meterString(this.nuevaPalabra);
      console.log('Palabra añadida desde componente 1: ', this.nuevaPalabra);
      this.nuevaPalabra = ''; // Limpiar el input después de añadir la palabra
    
    }
  }

}


