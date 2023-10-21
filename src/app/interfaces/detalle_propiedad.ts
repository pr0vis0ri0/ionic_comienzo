export interface DetallePropiedad {
    id_propiedad: number;
    valor_propiedad: number;
    es_arriendo: boolean;
    es_venta: boolean;
    nombre_tipo_propiedad: string;
    metros_totales: number;
    metros_utiles: number;
    cant_dormitorios: number;
    cant_banos: number;
    permite_mascotas: boolean;
    tiene_bodega: boolean;
    tiene_estacionamiento: boolean;
    nombre_comuna: string;
    nombre_region: string;
  }