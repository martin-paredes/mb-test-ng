import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminarCompraRoutingModule } from './terminar-compra-routing.module';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TerminarCompraComponent } from './components/terminar-compra/terminar-compra.component';


@NgModule({
  declarations: [
    TerminarCompraComponent,
  ],
  imports: [
    CommonModule,
    TerminarCompraRoutingModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class TerminarCompraModule { }
