import { Component, Input } from '@angular/core';
import { Oferta } from '../../models/oferta';

@Component({
  selector: 'app-ofertas',
  standalone: true,
  imports: [],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.sass'
})
export class OfertasComponent {
  @Input()
  ofertas: Oferta[] = [
    {
      sku: 'DCATO19939',
      srcImg: 'assets/imagenes/pagina-principal/ofertas/radiador.svg',
      descripcionProducto: 'Radiador agricola tractor Case 580 k Aluminio/Aluminio TM',
      precio: '$ 1,842',
      oferta: '$ 1,842',
      ranking: '4.9',
    },
    {
      sku: 'DCATO19939',
      srcImg: 'assets/imagenes/pagina-principal/ofertas/aspas.svg',
      descripcionProducto: 'Aspas para ventilador Mazda B20000, B22000',
      precio: '$ 1,842',
      oferta: '$ 1,842',
      ranking: '4.9',
    },
    {
      sku: 'DCATO19939',
      srcImg: 'assets/imagenes/pagina-principal/ofertas/escape.svg',
      descripcionProducto: 'Escape resonador mofle',
      precio: '$ 1,842',
      oferta: '$ 1,842',
      ranking: '4.9',
    },
    {
      sku: 'DCATO19939',
      srcImg: 'assets/imagenes/pagina-principal/ofertas/carter.svg',
      descripcionProducto: 'Carter aceite Mazda 6 2.5, 20009 a 2010 aluminio',
      precio: '$ 1,842',
      oferta: '$ 1,842',
      ranking: '4.9',
    },
    {
      sku: 'DCATO19939',
      srcImg: 'assets/imagenes/pagina-principal/ofertas/bujias.svg',
      descripcionProducto: 'Kit 5 Bujias Ngk Platino Vw Jetta Mk6 Bora Beetle Motor 2.5l',
      precio: '$ 1,842',
      oferta: '$ 1,842',
      ranking: '4.9',
    },
  ];

  constructor() { }
}
