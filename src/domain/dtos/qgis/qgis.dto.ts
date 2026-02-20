

export class QgisDto {

  private constructor(
    public id: number,
    public CODIGO_PROVEEDOR: String,
    public PROVEEDOR: String,
    public TIPO_PROVEEDOR: String,
    public CLASIFICACION: String,
    public FINCA: String,
    public CODIGO_FINCA: String,
    public LOTE: String,
    public AREA_ha_: String,
    public VEREDA: String,
    public ZONA: String,
    public municipio: String,
    public material: String,
    public etapa: String,
    public NUMERO_PALMAS: number,
    public DISTANCIA_PALMAS: number,
    public cobertura: String,
    public FECHA_DE_SIEMBRA: String,
    public edad_palma: number,
    public tipo: String,
    public uma: number,
    public asociacion: String,
    public observacio: String,
    public WKT: String,
    public CODIGO_LOTE: String

  ) { }


  get values() {
    const returnObj: { [key: string]: any } = {};

    //return returnObj;

    return {
      ...returnObj,
      ...this

    }
  }


  static create(props: { [key: string]: any }): [string?, QgisDto?] {

    const { id, CODIGO_PROVEEDOR, PROVEEDOR, TIPO_PROVEEDOR, CLASIFICACION, FINCA, CODIGO_FINCA, LOTE, AREA_ha_, VEREDA, ZONA, municipio, material, etapa, NUMERO_PALMAS, DISTANCIA_PALMAS, cobertura, FECHA_DE_SIEMBRA, edad_palma, tipo, uma, asociacion, observacio, WKT, CODIGO_LOTE } = props;

    if (!CODIGO_LOTE) return ['CODIGO_LOTE property is required', undefined];

    return [undefined, new QgisDto(id, CODIGO_PROVEEDOR, PROVEEDOR, TIPO_PROVEEDOR, CLASIFICACION, FINCA, CODIGO_FINCA, LOTE, AREA_ha_, VEREDA, ZONA, municipio, material, etapa, NUMERO_PALMAS, DISTANCIA_PALMAS, cobertura, FECHA_DE_SIEMBRA, edad_palma, tipo, uma, asociacion, observacio, WKT, CODIGO_LOTE)];
  }


}