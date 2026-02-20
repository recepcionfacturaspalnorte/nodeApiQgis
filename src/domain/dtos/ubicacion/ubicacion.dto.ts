

export class UbicacionDto {

  private constructor(
    public id: number,
    public readonly COD_UBICACION: string,
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


  static create(props: { [key: string]: any }): [string?, UbicacionDto?] {

    const { id, COD_UBICACION, detalle } = props;

    if (!COD_UBICACION) return ['COD_UBICACION property is required', undefined];

    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new UbicacionDto(id, COD_UBICACION, detalle)];
  }


}