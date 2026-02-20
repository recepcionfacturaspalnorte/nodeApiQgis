

export class PermissionDto {

  private constructor(
    public id: string,
    public readonly detalle: string,
    public readonly sistema: string | null,
  ) { }


  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.id) returnObj.id = this.id;
    if (this.detalle) returnObj.detalle = this.detalle;
    if (this.sistema) returnObj.sistema = this.sistema;

    //return returnObj;

    return {
      ...returnObj,
      ...this

    }
  }


  static create(props: { [key: string]: any }): [string?, PermissionDto?] {

    const { id, detalle, sistema } = props;

    if (!id) return ['id property is required', undefined];
    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new PermissionDto(id, detalle, sistema)];
  }


}