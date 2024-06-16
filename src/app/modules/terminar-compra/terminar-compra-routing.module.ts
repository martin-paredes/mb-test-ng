import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminarCompraComponent } from './components/terminar-compra/terminar-compra.component';

const routes: Routes = [
  {
    path: '',
    component: TerminarCompraComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminarCompraRoutingModule { }
