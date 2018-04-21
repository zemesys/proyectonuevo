// importamos los routers necesarios para redirecciones en  de la plicacion
import { RouterModule, Routes } from '@angular/router';

// aqui importamos los componentes de las paginas selecionadas en routes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';




const appRoutes: Routes = [
    {      //  la ruta patch  va a redirecionar a PagesComponent que a su vez tiene rutas hijas  Children
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // si no exixte la pagina redirecionamos a la pagina dashboard
        ]

    },

    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NopagefoundComponent},  // cualquier otra ruta no mostrada aqui redirecionamos a dashboard

];


// aqui exportamos nuestro arreglo de rutas "appRoutes" en una variable llamada APP_ROUTES
export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
