import { Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada/pagina-no-encontrada.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/autenticacion/autenticacion.module').then((m) => m.AutenticacionModule),
        pathMatch: 'full',
        canActivate: []
    },
    {
        path: 'pagina-no-encontrada',
        component: PaginaNoEncontradaComponent
    },
    {
        path: 'inicio-sesion',
        loadChildren: () => import('./modules/autenticacion/autenticacion.module').then((m) => m.AutenticacionModule),
        canActivate: []
    },
    {
        path: 'registro',
        loadChildren: () => import('./modules/registro/registro.module').then((m) => m.RegistroModule),
        canActivate: []
    },
    {
        path: 'home',
        loadChildren: () => import('./modules/pagina-principal/pagina-principal.module').then((m) => m.PaginaPrincipalModule),
        canActivate: []
    },
    {
        path: 'busqueda',
        loadChildren: () => import('./modules/busqueda/busqueda.module').then((m) => m.BusquedaModule),
        canActivate: []
    }
];
