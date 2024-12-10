import { Component } from '@angular/core';
import { ComunicacionServiceService } from '../shared/service/comunicacion-service.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss']
})
export class Componente2Component {

  constructor(private servicio: ComunicacionServiceService){

  }

  cantidadComponente2!: number;
  listaComponente2!: string[];

  ngOnInit() {
    this.servicio.cantidadSeleccionada$.subscribe(cantidad => {
      this.cantidadComponente2 = cantidad;
    });
    this.servicio.listaSeleccionada$.subscribe(lista => {
      this.listaComponente2 = lista;
    });
  }
}
