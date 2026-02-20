export interface CargaTicketResults {
    total: string;
    page: string;
    regs_per_page: string;
    results: TicketResult[];
}


export interface TicketResult {
    PREFIJO: string;
    NO_TIQUETE: string;
    string: string;
    id2: string;
    fecha_ini: string,
    hora_ini: string,
    fecha_fin: string,
    hora_fin: string,
    fecha_hora: string,
    idcliente: string,
    rut: string,
    SUBCODIGO: string,
    PLACA: string,
    cod_transportadora: string,
    COD_CONDUCTOR: string,
    ref: string,
    obser: string,
    bruto_p1: string,
    tara_p1: string,
    neto_p1: string,

    PROCESADO: string,
    foma_pesaje: number,
    id_causal: string,
    detalle_causal: string,
    usuario: string,
    id_lote: string,
    id_bascula_p1: string,
    id_recibo_bascula: string,
    usuario_evaluador: string,
    fecha_modificado: string,
    tamano_muestra: number,
    id_tabla_castigo: string,
    anulado: string,
    origen: string,
    destino: string,
    COD_FINCA: string,
    id_tenencia: string,
    id_vereda: string,
    id_zona: string,
    id_base_suministro_finca: string,
    recibo_certificado: string,
    nombrecliente: string,
    nombretrans: string,
    nombreconductor: string,
    nombreproducto: string,
    nombrebascula: string,
    prefijobascula: string,
    CODIGO_SIESA: string,
    ubicacion_SIESA: string,
    estado_SIESA?: number,
    respuesta_SIESA?: string,
    fecha_SIESA?: string,
}

