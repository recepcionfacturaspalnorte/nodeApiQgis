

export class CategoryDto {

  private constructor(
    public id: string,
    public readonly detalle: string,
  ) { }


  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.id) returnObj.id = this.id;
    if (this.detalle) returnObj.detalle = this.detalle;


    //return returnObj;

    return {
      ...returnObj,
      ...this

    }
  }


  static create(props: { [key: string]: any }): [string?, CategoryDto?] {

    const { id, detalle, sistema } = props;

    if (!id) return ['id property is required', undefined];
    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new CategoryDto(id, detalle)];
  }


}