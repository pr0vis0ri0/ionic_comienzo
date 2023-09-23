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
        console.log('Se inició el servicio.')
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
        return [...this.registros]
    }

    // Accesador que retorna la dirección del arreglo (¿? No lo entiendo, la única diferencia con el primer método es que este se accede como si fuese una propiedad de un objeto.)
    get getRegistrosReferencia(): IRegistro[] {
        return this.registros
    }

    agregarServicio(reg : IRegistro){
        this.registros.push(reg)
        console.log("Registro agregar : ", this.registros)
    }

    actualizarServicio (reg: IRegistro) {
        let buscar = this.registros.find((e) => e.id === reg.id) 

        if (buscar) {
            buscar.nombres = reg.nombres
            buscar.apellidos = reg.apellidos
            buscar.correo = reg.correo
            buscar.clave = reg.clave
        }
    }

    eliminarServicio (id : string) {
        for (let i = this.registros.length - 1 ; i >= 0 ; i --) {
            if (this.registros[i].id === id) {
                this.registros.splice(i, 1)
            }
        }
    }

    leerServicio (id : string) : IRegistro {

        for (let i = 0 ; i < this.registros.length ; i ++) {
            if (this.registros[i].id === id) {
                return this.registros[i]
            }
        }

        return {
            id : '',
            nombres : '',
            apellidos : '',
            correo : '',
            clave : ''
        }
    }
}