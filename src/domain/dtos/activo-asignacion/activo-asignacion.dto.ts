
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
export class Activo_asignacionDto {

  private constructor(
    public id: number,
    public readonly fecha?: Date,
    public tipo_asignacionId?: number | null,
    public responsableId?: number | null,
    public ubicacionId?: number | null,
    public sucursalId?: number | null,
    public areaId?: number | null,
    public activoId?: number | null,
    public fecha_entrega?: Date | null,
    public estado?: string | null,
    public obser?: string | null,
  ) { }

  static create(props: { [key: string]: any }): [string?, Activo_asignacionDto?] {

    const {
      id,
      fecha,
      tipo_asignacionId,
      responsableId = null,
      ubicacionId = null,
      sucursalId = null,
      areaId = null,
      activoId = null,
      fecha_entrega = null,
      estado = null,
      obser = null,
      //      files = [],
    } = props;

    if (!activoId) return ['activoId property is required', undefined];

    const parseResponsableId = parseNumber(responsableId);
    const parseSucursalId = parseNumber(sucursalId);
    const parseActivoId = parseNumber(activoId);
    const parseAreaId = parseNumber(areaId);
    const parseUbicacionId = parseNumber(ubicacionId);
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
    let newFecha_entrega = null;
    if (fecha_entrega) {
      const parsed = new Date(fecha_entrega);
      if (isNaN(parsed.getTime())) {
        return ['fecha_entrega must be a valid date', undefined];
      }
      // 👇 Ajustamos hora a 00:00:00
      parsed.setUTCHours(0, 0, 0, 0);
      newFecha_entrega = parsed;
    }


    // ✅ Retornamos instancia válida
    return [
      undefined,
      new Activo_asignacionDto(
        id,
        newFecha,
        tipo_asignacionId,
        parseResponsableId,
        parseUbicacionId,
        parseSucursalId,
        parseAreaId,
        parseActivoId,
        newFecha_entrega,
        estado,
        obser,
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
