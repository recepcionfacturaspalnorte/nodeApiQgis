

export class Tipo_asignacionDto {

  private constructor(
    public id: number,
    public readonly COD_TIPO_ASIGNACION: string,
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


  static create(props: { [key: string]: any }): [string?, Tipo_asignacionDto?] {

    const { id, COD_TIPO_ASIGNACION, detalle } = props;

    if (!COD_TIPO_ASIGNACION) return ['COD_TIPO_ASIGNACION property is required', undefined];

    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new Tipo_asignacionDto(id, COD_TIPO_ASIGNACION, detalle)];
  }


}