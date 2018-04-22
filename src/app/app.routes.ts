// importacion de las librerias necesarias de node_modules para que funcione este modulo
import { RouterModule, Routes } from '@angular/router';

// aqui importamos los componentes de login para enrutar  Routes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// aqui importamos los componentes de Shared para enrutar  Routes
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoutes: Routes = [

    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NopagefoundComponent},  // cualquier otra ruta no mostrada aqui redirecionamos a dashboard

];


// aqui exportamos nuestro arreglo de rutas "appRoutes" en una variable llamada APP_ROUTES
export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
