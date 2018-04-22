// importacion de las librerias necesarias de node_modules para que funcione este modulo
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class UsuariosComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}