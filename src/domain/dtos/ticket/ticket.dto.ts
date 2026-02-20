
/*
id                Int              @id @default(autoincrement())
  fecha             DateTime?
  tipo_asignacion   Tipo_asignacion? @relation(fields: [tipo_asignacionId], references: [id])
  tipo_asignacionId Int?
  responsable       User?            @relation(fields: [userId], references: [id])
  responsableId            Int?
  ubicacion         Ubicacion?       @relation(fields: [ubicacionId], references: [id])
  ubicacionId       Int?
  sucursal          Sucursal?        @relation(fields: [sucursalId], references: [id])
  sucursalId        Int?
  area              Area?            @relation(fields: [areaId], references: [id])
  areaId            Int?
  activo            Activo?          @relation(fields: [activoId], references: [id])
  activoId          Int?
  fecha_entrega     DateTime?
  estado            String?
*/
export class TicketDto {

  private constructor(
    public id: number,
    public readonly fecha?: Date,
    public readonly fecha_fin?: Date | null,
    public hora?: string | null,
    public titulo?: string | null,
    public usuarioId?: number | null,
    public activoId?: number | null,
    public prioridadId?: number | null,
    public obser?: string | null,
    public areaId?: number | null,
    public sucursalId?: number | null,
    public ubicacionId?: number | null,
    public agenteId?: number | null,
    public estadoTicketId?: number | null,
    public ticket_tipoId?: number | null,
    public resumen?: string | null,

  ) { }

  static create(props: { [key: string]: any }): [string?, TicketDto?] {

    const {
      id,
      fecha,
      fecha_fin,
      hora,
      titulo,
      usuarioId,
      activoId,
      prioridadId = 3,
      obser = null,
      areaId = null,
      sucursalId = null,
      ubicacionId = null,
      agenteId = null,
      estadoTicketId = null,
      ticket_tipoId = null,
      resumen = null,

      //      files = [],
    } = props;

    if (!usuarioId) return ['UsuarioId property is required', undefined];

    const parseUsuarioId = parseNumber(usuarioId);
    const parseActivoId = parseNumber(activoId);
    const parsePrioridadId = parseNumber(prioridadId);
    const parseAreaId = parseNumber(areaId);
    const parseSucursalId = parseNumber(sucursalId);
    const parseUbicacionId = parseNumber(ubicacionId);
    const parseAgenteId = parseNumber(agenteId);
    const parseestadoTicketId = parseNumber(estadoTicketId);
    const parseticket_tipoId = parseNumber(ticket_tipoId);
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
    if (fecha_fin) {
      const parsed = new Date(fecha_fin);
      if (isNaN(parsed.getTime())) {
        return ['fecha_fin must be a valid date', undefined];
      }
      // 👇 Ajustamos hora a 00:00:00
      parsed.setUTCHours(0, 0, 0, 0);
      newFecha_fin = parsed;
    }


    // ✅ Retornamos instancia válida
    return [
      undefined,
      new TicketDto(
        id,
        newFecha,
        newFecha_fin,
        hora,
        titulo,
        parseUsuarioId,
        parseActivoId,
        parsePrioridadId,
        obser,
        parseAreaId,
        parseSucursalId,
        parseUbicacionId,
        parseAgenteId,
        parseestadoTicketId,
        parseticket_tipoId,
        resumen
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
