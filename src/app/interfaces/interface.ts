export interface Propiedad {
    id_propiedad: number;
    valor_propiedad: number;
    es_arriendo: boolean;
    es_venta: boolean;
    nombre_tipo_propiedad: string;
    nombre_comuna: string;
    nombre_region: string;
}

export interface DetallePropiedad extends Propiedad {
    metros_totales: number;
    metros_utiles: number;
    cant_dormitorios: number;
    cant_banos: number;
    permite_mascotas: boolean;
    tiene_bodega: boolean;
    tiene_estacionamiento: boolean;
}

export interface User {
    username: string;
    password: string;
    email?: string;
    first_name?: string;
    last_name?: string;
    access? : string
}