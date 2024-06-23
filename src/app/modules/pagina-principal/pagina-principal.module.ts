import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { FooterComponent } from '../../components/footer/footer.component';


@NgModule({
  declarations: [
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule,
    PaginaPrincipalRoutingModule,
    HeaderComponent,
    FooterComponent,
  ]
})
export class PaginaPrincipalModule { }
