

export class TicketImageDto {

  private constructor(
    public id: number,
    public readonly url: string,
    public readonly ticketId?: number,

  ) { }


  get values() {
    const returnObj: { [key: string]: any } = {};

    //return returnObj;

    return {
      ...returnObj,
      ...this

    }
  }


  static create(props: { [key: string]: any }): [string?, TicketImageDto?] {

    const { id, url, ticketId } = props;

    if (!url) return ['url property is required', undefined];

    if (!id) return ['id property is required', undefined];


    return [undefined, new TicketImageDto(id, url, ticketId)];
  }


}