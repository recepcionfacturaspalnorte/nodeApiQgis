

export class Ticket_tipoDto {

  private constructor(
    public id: number,
    public readonly COD_TICKET_TIPO: string,
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


  static create(props: { [key: string]: any }): [string?, Ticket_tipoDto?] {

    const { id, COD_TICKET_TIPO, detalle } = props;

    if (!COD_TICKET_TIPO) return ['COD_TICKET_TIPO property is required', undefined];

    if (!detalle) return ['detalle property is required', undefined];


    return [undefined, new Ticket_tipoDto(id, COD_TICKET_TIPO, detalle)];
  }


}