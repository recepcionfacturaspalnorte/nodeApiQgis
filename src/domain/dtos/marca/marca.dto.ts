

export class MarcaDto {

  private constructor(
    public id: number,
    public readonly COD_MARCA: string,
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


  static create(props: { [key: string]: any }): [string?, MarcaDto?] {

    const { id, COD_MARCA, detalle } = props;

    if (!COD_MARCA) return ['COD_MARCA property is required', undefined];

    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new MarcaDto(id, COD_MARCA, detalle)];
  }


}