// importacion de las librerias necesarias de node_modules para que funcione este modulo
import { RouterModule, Routes } from '@angular/router';


// aqui importamos los componentes de Pages para enrutar  Routes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/Usuarios.component';
import { ProgressComponent } from './progress/progress.component';
// import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const pagesRoutes: Routes = [
    {      //  la ruta patch  va a redirecionar a PagesComponent que a su vez tiene rutas hijas  Children
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'usuarios', component: UsuariosComponent},
            { path: 'progress', component: ProgressComponent},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // si no exixte la pagina redirecionamos a la pagina dashboard
        ]

    }



];

// aqui exportamos nuestro arreglo de rutas "appRoutes" en una variable llamada PAGES_ROUTES
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
