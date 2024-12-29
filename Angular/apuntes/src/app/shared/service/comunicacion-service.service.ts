import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../interface/producto';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionServiceService {

  constructor() { }
//--------------------CANTIDAD--------------------
  private cantidadBeha = new BehaviorSubject<number>(0);
  cantidadSeleccionada$ = this.cantidadBeha.asObservable();

  getCantidad():number{
    return this.cantidadBeha.getValue();
  }

  meterCantidad(nuevaCantidad:number){
    this.cantidadBeha.next(nuevaCantidad);
    console.log('Cantidad actualizada desde servicio a: ', nuevaCantidad);
  }

//--------------------LISTA--------------------
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

  //----------------FILTRO---------------
    
  private productosBehavior = new BehaviorSubject<Producto[]>([]);
  productosSeleccionados$ = this.productosBehavior.asObservable();

  getProductos(): Producto[] {
    return this.productosBehavior.getValue();
  }

  agregarProducto(nuevoProducto: Producto): void {
    const productosActuales = this.productosBehavior.getValue();
    productosActuales.push(nuevoProducto);
    this.productosBehavior.next(productosActuales);
    console.log('Productos actualizados desde servicio a: ', productosActuales);
  }

  filtrarProductosPorCategoria(categoria: string): Observable<Producto[]> {
    const productosFiltrados = this.productosBehavior.getValue().filter(producto => producto.categoria === categoria);
    return new BehaviorSubject<Producto[]>(productosFiltrados).asObservable();
  }



}
