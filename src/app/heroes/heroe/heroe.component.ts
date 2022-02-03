import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre:string = 'iroman';
    edad:number = 34;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        return `${this.nombre}-${this.edad}`;
    }

    cambiarNombre():void {
        this.nombre = 'spiderman';
    }
    
    cambiarEdad():void {
        this.edad = 45;
    }

}