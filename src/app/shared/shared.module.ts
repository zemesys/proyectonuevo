// importacion de las librerias necesarias de node_modules para que funcione este modulo
import { NgModule } from '@angular/core';

// importamos todos los Componentes de la carpeta Shared
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { QuickSidebarComponent } from './quick-sidebar/quick-sidebar.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    declarations: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        ScrollTopComponent,
        QuickSidebarComponent,
        FooterComponent

    ],

    imports: [

    ],

    exports: [
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        ScrollTopComponent,
        QuickSidebarComponent,
        FooterComponent
    ],
    providers: [],
})

// exportamos Module
export class SharedModule {}


