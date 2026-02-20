export interface RequestBody {
    Documentos: Documento[];
    Movimientos: Movimiento[];
}

export interface Documento {
    "centro operacion": string;
    "Consecutivo de documento": string;
    "Fecha del documento AAAAMMDD": string;
    Tercero: string;
    "Sucursal del proveedor": string;
    "Tercero comprador": string;
    "Tiquete de Bascula": string;
}

export interface Movimiento {
    "centro de operacion del documento": string;
    "Numero de documento": string;
    "Numero de registro": string;
    Ubicacion: string;
    "Unidad de medida": string;
    "Cantidad base": string;
    Extraccion: string;
    Item: string;
    "Unidad de negocio movimiento": string;
}
