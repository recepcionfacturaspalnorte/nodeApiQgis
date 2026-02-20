

export class Ticket_mensajeDto {

  private constructor(
    public id: number,
    public readonly fecha?: Date,
    public hora?: string | null,
    public mensaje?: string | null,
    public userId?: number | null,
    public ticketId?: number | null,

  ) { }

  static create(props: { [key: string]: any }): [string?, Ticket_mensajeDto?] {

    const {
      id,
      fecha,
      hora,
      mensaje,
      userId,
      ticketId,

      //      files = [],
    } = props;

    if (!userId) return ['UsuarioId property is required', undefined];

    const parseUsuarioId = parseNumber(userId);
    const parseTicketId = parseNumber(ticketId);
    let newFecha = new Date();
    if (fecha) {
      const parsed = new Date(fecha);
      if (isNaN(parsed.getTime())) {
        return ['fecha must be a valid date', undefined];
      }
      // 👇 Ajustamos hora a 00:00:00
      //parsed.setHours(0, 0, 0);
      parsed.setUTCHours(0, 0, 0, 0);

      newFecha = parsed;
    } else {
      // Si no se envía, usar la fecha actual con hora 00:00:00
      newFecha.setUTCHours(0, 0, 0, 0);
    }
    let newFecha_fin = null;


    // ✅ Retornamos instancia válida
    return [
      undefined,
      new Ticket_mensajeDto(
        id,
        newFecha,
        hora,
        mensaje,
        parseUsuarioId,
        parseTicketId,

        //      images,
      ),
    ];
  }

  get values() {
    const returnObj: { [key: string]: any } = {};
    //return returnObj;
    return {
      ...returnObj,
      ...this

    }
  }


}

// 🔍 Helper para validar números o nulos
const parseNumber = (value: any): number | null => {
  if (value === null || value === undefined || value === '') return null;
  const num = Number(value);
  return isNaN(num) ? null : num;
};
