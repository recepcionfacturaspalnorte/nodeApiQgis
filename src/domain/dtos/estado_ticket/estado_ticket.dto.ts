

export class Estado_ticketDto {

  private constructor(
    public id: number,
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


  static create(props: { [key: string]: any }): [string?, Estado_ticketDto?] {

    const { id, detalle } = props;



    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new Estado_ticketDto(id, detalle)];
  }


}