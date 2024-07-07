import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoComprasRoutingModule } from './carrito-compras-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { ResumenComprasComponent } from './components/resumen-compras/resumen-compras.component';
import { CompradosHabitualmenteComponent } from './components/comprados-habitualmente/comprados-habitualmente.component';


@NgModule({
  declarations: [
    CarritoComprasComponent,
  ],
  imports: [
    CommonModule,
    CarritoComprasRoutingModule,
    ResumenComprasComponent,
    ListadoProductosComponent,
    CompradosHabitualmenteComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class CarritoComprasModule { }
