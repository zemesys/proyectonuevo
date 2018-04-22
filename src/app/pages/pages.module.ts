// importacion de las librerias necesarias de node_modules para que funcione este modulo
import { NgModule } from '@angular/core';

// importamos modulo secundario de las Rutas
import { PAGES_ROUTES } from './pages.routes';

// Ruta de todos los componentes de la carpeta Pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/Usuarios.component';
// Ruta del modulo del template de la aplicacion para que funcionen las paginas
import { SharedModule } from '../shared/shared.module';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        UsuariosComponent


    ],

    // importamos los componentes y Modulos para poder trabajar dentro de pages
    imports: [
        SharedModule,
        PAGES_ROUTES
    ],


    // exportamos los componentes necesarios para poder trabajar en fuera de pages
    exports: [
        DashboardComponent,
        UsuariosComponent
    ],
    providers: [],


})



export class PagesModule { }
