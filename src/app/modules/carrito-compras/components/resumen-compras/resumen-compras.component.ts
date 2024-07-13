import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-compras',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './resumen-compras.component.html',
  styleUrl: './resumen-compras.component.sass'
})
export class ResumenComprasComponent {

  public tipoResumenCompras: 'carritoCompras' | 'terminarCompra' = 'carritoCompras';

}
