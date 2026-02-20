

export class AreaDto {

  private constructor(
    public id: number,
    public readonly COD_AREA: string,
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


  static create(props: { [key: string]: any }): [string?, AreaDto?] {

    const { id, COD_AREA, detalle } = props;

    if (!COD_AREA) return ['COD_AREA property is required', undefined];

    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new AreaDto(id, COD_AREA, detalle)];
  }


}