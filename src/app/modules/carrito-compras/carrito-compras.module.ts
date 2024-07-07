import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarritoComprasRoutingModule } from './carrito-compras-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';


@NgModule({
  declarations: [
    CarritoComprasComponent,
  ],
  imports: [
    CommonModule,
    CarritoComprasRoutingModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class CarritoComprasModule { }
