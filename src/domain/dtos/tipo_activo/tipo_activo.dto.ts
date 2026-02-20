

export class Tipo_activoDto {

  private constructor(
    public id: number,
    public readonly COD_TIPO_ACTIVO: string,
    public readonly detalle: string,

  ) { }


  get values() {
    const returnObj: { [key: string]: any } = {};

    //return returnObj;

    return {
      ...returnObj,
      ...this

    }
  }


  static create(props: { [key: string]: any }): [string?, Tipo_activoDto?] {

    const { id, COD_TIPO_ACTIVO, detalle } = props;

    if (!COD_TIPO_ACTIVO) return ['COD_TIPO_EQUIPO property is required', undefined];

    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new Tipo_activoDto(id, COD_TIPO_ACTIVO, detalle)];
  }


}