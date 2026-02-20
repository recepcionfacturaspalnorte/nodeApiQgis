

export class CargoDto {

  private constructor(
    public id: number,
    public readonly COD_CARGO: string,
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


  static create(props: { [key: string]: any }): [string?, CargoDto?] {

    const { id, COD_CARGO, detalle } = props;

    if (!COD_CARGO) return ['COD_CARGO property is required', undefined];

    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new CargoDto(id, COD_CARGO, detalle)];
  }


}