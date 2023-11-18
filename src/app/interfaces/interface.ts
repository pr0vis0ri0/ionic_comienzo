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

export interface JwtPayload {
    exp: number;
    iat: number;
    id_perfil: number;
    id_usuario: number;
    jti: string;
    token_type: string;
    user_id: number;
}

// Tuve que hacer una interface para sí sola
// ya que da error :(
export interface RegistroPropiedad {
    id_usuario?: number;
    valor_propiedad: number;
    es_arriendo: boolean;
    es_venta: boolean;
    id_tipo_propiedad: number;
    id_comuna: number;
    metros_totales: number;
    metros_utiles: number;
    cant_dormitorios: number;
    cant_banos: number;
    permite_mascotas: boolean;
    tiene_bodega: boolean;
    tiene_estacionamiento: boolean;
    
}

export interface AdmPropiedadBase {
    id_propiedad:number ,
    valor_propiedad: number,
    es_arriendo: boolean,
    es_venta: boolean,
    descripcion_estado: string,
    nombre_tipo_propiedad:string,
    metros_totales: number,
    metros_utiles: number,
    cant_dormitorios: number,
    cant_banos:number,
    permite_mascotas: boolean,
    tiene_bodega:  boolean,
    tiene_estacionamiento: boolean,
    nombre_comuna: string,
    nombre_region: string,
    nombre_usuario: string,
}

export interface TodasPropiedades {
    id_propiedad?: number,
    valor_propiedad?: number,
    es_arriendo?: boolean,
    es_venta?: boolean,
    descripcion_estado?: string,
    nombre_tipo_propiedad?: string,
    metros_totales?: number,
    metros_utiles?: number,
    cant_dormitorios?: number,
    cant_banos?: number,
    permite_mascotas?: boolean,
    tiene_bodega?: boolean,
    tiene_estacionamiento?: boolean,
    nombre_comuna?: string,
    nombre_region?:  string,
    nombre_usuario?: string,
}