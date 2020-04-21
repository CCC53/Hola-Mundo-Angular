import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
})
export class BodyComponent {
    frase: any = {
        mensaje: 'El amor lleva al miedo, el miedo al odio y el odio al lado oscuro',
        autor: 'Yoda'
    };
    mostrar = true;
    personajes: string[] = ['Anakin', 'Obi wan', 'Yoda'];
}