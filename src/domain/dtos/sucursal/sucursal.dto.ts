

export class SucursalDto {

  private constructor(
    public id: number,
    public readonly COD_SUCURSAL: string,
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


  static create(props: { [key: string]: any }): [string?, SucursalDto?] {

    const { id, COD_SUCURSAL, detalle } = props;

    if (!COD_SUCURSAL) return ['COD_SUCURSAL property is required', undefined];

    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new SucursalDto(id, COD_SUCURSAL, detalle)];
  }


}