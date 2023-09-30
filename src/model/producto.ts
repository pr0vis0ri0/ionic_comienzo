export class Producto {
    id : number;
    nombre : string;
    descripcion: string;
    precio : number;
    cantidad : number;
    fecha: Date;

    constructor (obj : any) {
        this.id = obj && obj.id || null
        this.nombre = obj && obj.nombre || null
        this.descripcion = obj && obj.descripcion || null
        this.precio = obj && obj.precio || null
        this.cantidad = obj && obj.cantidad || null
        this.fecha = obj && obj.fecha || null
    }
}