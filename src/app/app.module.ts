// importacion de las librerias necesarias de node_modules para que funcione este modulo
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importacion de los modulos de las carpetas de la aplicacion

// importamos el modulo principal de las Rutas
import { APP_ROUTES } from './app.routes';

// importamos los modulos hijos de las carpetas de la aplicacion al modulo principal
import { PagesModule } from './pages/pages.module';

// importamos los Componentes de las carpetas de la aplicacion que necesitemos que funcionen globalmente
import { AppComponent } from './app.component';

// importamos los Componentes de la carpeta login
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
