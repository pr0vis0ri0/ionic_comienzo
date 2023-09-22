import { Injectable } from "@angular/core";
import { IRegistro } from "./interface/registro";

@Injectable({
    providedIn: 'root'
})

export class ClienteService {
    private registros : IRegistro [] = [
        { id: "122", nombres: "Juan Gabriel", apellidos: "Picapiedras", correo: "picapiedrax@harrys.cl",clave: "1134" }, 
        { id: "128", nombres: "Tito Gabril", apellidos: "Picapiedras", clave: "1134" },
        { id: "129", nombres: "Ana Maria", apellidos: "Picapiedras" },
        { id: "1234", nombres: "Tortuelo Jaime", apellidos: "Picapiedras" },
        { id: "1223242", nombres: "El Gato", apellidos: "Picapiedras" },
        { id: "122324", nombres: "El Cocodrilo", apellidos: "Picapiedras" },
        { id: "12232", nombres: "Mario Jose", apellidos: "Picapiedras" }
    ]

    constructor () {
        console.log('Se inició el serivicio.')
    }

    // Método que accede a la dirección de donde se encuentran los datos.
    getRegistroMetodo() : IRegistro[] {
        return this.registros;
    }

    // Método que copia la información de los datos por medio de la dirección.
    get getRegistros() : IRegistro[] {
        return [...this.registros]
    }

    // Otro método que copia la información de los datos por medio de la referencia al array registros
    get getRegistrosCopia(): IRegistro[] {
        // 3 punto retorna una copia
        return [...this.registros]
    }
    // Accesador que retorna la dirección del arreglo (¿? No lo entiendo, la única diferencia con el primer método es que este se accede como si fuese una propiedad de un objeto.)
    get getRegistrosReferencia(): IRegistro[] {
        return this.registros
    }
}