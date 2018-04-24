// importacion de las librerias necesarias de node_modules para que funcione este modulo
import { NgModule } from '@angular/core';

// importamos modulo secundario de las Rutas
import { PAGES_ROUTES } from './pages.routes';

// Ruta de todos los componentes de la carpeta Pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/Usuarios.component';
import { ProgressComponent } from './progress/progress.component';

// Ruta del modulo del template de la aplicacion para que funcionen las paginas
import { SharedModule } from '../shared/shared.module';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        UsuariosComponent,
        ProgressComponent

    ],

    // importamos los componentes y Modulos para poder trabajar dentro de pages
    imports: [
        SharedModule,
        PAGES_ROUTES
    ],


    // exportamos los componentes necesarios para poder trabajar fuera de pages
    exports: [
        DashboardComponent,
        UsuariosComponent,
        ProgressComponent
    ],
    providers: [],


})



export class PagesModule { }
