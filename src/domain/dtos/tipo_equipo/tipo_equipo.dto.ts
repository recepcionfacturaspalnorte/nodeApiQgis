

export class Tipo_equipoDto {

  private constructor(
    public id: number,
    public readonly COD_TIPO_EQUIPO: string,
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


  static create(props: { [key: string]: any }): [string?, Tipo_equipoDto?] {

    const { id, COD_TIPO_EQUIPO, detalle } = props;

    if (!COD_TIPO_EQUIPO) return ['COD_TIPO_EQUIPO property is required', undefined];

    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new Tipo_equipoDto(id, COD_TIPO_EQUIPO, detalle)];
  }


}