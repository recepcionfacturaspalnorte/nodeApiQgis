

export class Categoria_activoDto {

  private constructor(
    public id: number,
    public readonly COD_CATEGORIA_ACTIVO: string,
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


  static create(props: { [key: string]: any }): [string?, Categoria_activoDto?] {

    const { id, COD_CATEGORIA_ACTIVO, detalle } = props;

    if (!COD_CATEGORIA_ACTIVO) return ['COD_CATEGORIA_ACTIVO property is required', undefined];

    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new Categoria_activoDto(id, COD_CATEGORIA_ACTIVO, detalle)];
  }


}