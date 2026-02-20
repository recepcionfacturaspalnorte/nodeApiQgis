
export class Plan_mantenimientoDto {

  private constructor(
    public id: number,
    public readonly fecha?: Date,
    public anio?: number | null,
    public agenteId?: number | null,
    public ubicacionId?: number | null,
    public sucursalId?: number | null,
    public areaId?: number | null,
    public activoId?: number | null,

    public fecha_planeacion?: Date | null,
    public fecha_ejecucion?: Date | null,

    public semana_pl_software_01?: string | null,
    public semana_pl_software_02?: string | null,
    public semana_pl_software_03?: string | null,
    public semana_pl_software_04?: string | null,
    public semana_pl_software_05?: string | null,
    public semana_pl_software_06?: string | null,
    public semana_pl_software_07?: string | null,
    public semana_pl_software_08?: string | null,
    public semana_pl_software_09?: string | null,
    public semana_pl_software_10?: string | null,
    public semana_pl_software_11?: string | null,
    public semana_pl_software_12?: string | null,

    public semana_pl_hardware_01?: string | null,
    public semana_pl_hardware_02?: string | null,
    public semana_pl_hardware_03?: string | null,
    public semana_pl_hardware_04?: string | null,
    public semana_pl_hardware_05?: string | null,
    public semana_pl_hardware_06?: string | null,
    public semana_pl_hardware_07?: string | null,
    public semana_pl_hardware_08?: string | null,
    public semana_pl_hardware_09?: string | null,
    public semana_pl_hardware_10?: string | null,
    public semana_pl_hardware_11?: string | null,
    public semana_pl_hardware_12?: string | null,

    public semana_pl_copia_01?: string | null,
    public semana_pl_copia_02?: string | null,
    public semana_pl_copia_03?: string | null,
    public semana_pl_copia_04?: string | null,
    public semana_pl_copia_05?: string | null,
    public semana_pl_copia_06?: string | null,
    public semana_pl_copia_07?: string | null,
    public semana_pl_copia_08?: string | null,
    public semana_pl_copia_09?: string | null,
    public semana_pl_copia_10?: string | null,
    public semana_pl_copia_11?: string | null,
    public semana_pl_copia_12?: string | null,

    public semana_pl_revision_01?: string | null,
    public semana_pl_revision_02?: string | null,
    public semana_pl_revision_03?: string | null,
    public semana_pl_revision_04?: string | null,
    public semana_pl_revision_05?: string | null,
    public semana_pl_revision_06?: string | null,
    public semana_pl_revision_07?: string | null,
    public semana_pl_revision_08?: string | null,
    public semana_pl_revision_09?: string | null,
    public semana_pl_revision_10?: string | null,
    public semana_pl_revision_11?: string | null,
    public semana_pl_revision_12?: string | null,

    public semana_ej_software_01?: string | null,
    public semana_ej_software_02?: string | null,
    public semana_ej_software_03?: string | null,
    public semana_ej_software_04?: string | null,
    public semana_ej_software_05?: string | null,
    public semana_ej_software_06?: string | null,
    public semana_ej_software_07?: string | null,
    public semana_ej_software_08?: string | null,
    public semana_ej_software_09?: string | null,
    public semana_ej_software_10?: string | null,
    public semana_ej_software_11?: string | null,
    public semana_ej_software_12?: string | null,

    public semana_ej_hardware_01?: string | null,
    public semana_ej_hardware_02?: string | null,
    public semana_ej_hardware_03?: string | null,
    public semana_ej_hardware_04?: string | null,
    public semana_ej_hardware_05?: string | null,
    public semana_ej_hardware_06?: string | null,
    public semana_ej_hardware_07?: string | null,
    public semana_ej_hardware_08?: string | null,
    public semana_ej_hardware_09?: string | null,
    public semana_ej_hardware_10?: string | null,
    public semana_ej_hardware_11?: string | null,
    public semana_ej_hardware_12?: string | null,

    public semana_ej_copia_01?: string | null,
    public semana_ej_copia_02?: string | null,
    public semana_ej_copia_03?: string | null,
    public semana_ej_copia_04?: string | null,
    public semana_ej_copia_05?: string | null,
    public semana_ej_copia_06?: string | null,
    public semana_ej_copia_07?: string | null,
    public semana_ej_copia_08?: string | null,
    public semana_ej_copia_09?: string | null,
    public semana_ej_copia_10?: string | null,
    public semana_ej_copia_11?: string | null,
    public semana_ej_copia_12?: string | null,

    public semana_ej_revision_01?: string | null,
    public semana_ej_revision_02?: string | null,
    public semana_ej_revision_03?: string | null,
    public semana_ej_revision_04?: string | null,
    public semana_ej_revision_05?: string | null,
    public semana_ej_revision_06?: string | null,
    public semana_ej_revision_07?: string | null,
    public semana_ej_revision_08?: string | null,
    public semana_ej_revision_09?: string | null,
    public semana_ej_revision_10?: string | null,
    public semana_ej_revision_11?: string | null,
    public semana_ej_revision_12?: string | null,


    public estado?: string | null,
    public obser?: string | null,


  ) { }

  static create(props: { [key: string]: any }): [string?, Plan_mantenimientoDto?] {

    const {
      id,
      fecha,
      anio,
      agenteId = null,
      ubicacionId = null,
      sucursalId = null,
      areaId = null,
      activoId = null,
      fecha_planeacion = null,
      fecha_ejecucion = null,

      semana_pl_software_01,
      semana_pl_software_02 = null,
      semana_pl_software_03 = null,
      semana_pl_software_04 = null,
      semana_pl_software_05 = null,
      semana_pl_software_06 = null,
      semana_pl_software_07 = null,
      semana_pl_software_08 = null,
      semana_pl_software_09 = null,
      semana_pl_software_10 = null,
      semana_pl_software_11 = null,
      semana_pl_software_12 = null,


      semana_pl_hardware_01 = null,
      semana_pl_hardware_02 = null,
      semana_pl_hardware_03 = null,
      semana_pl_hardware_04 = null,
      semana_pl_hardware_05 = null,
      semana_pl_hardware_06 = null,
      semana_pl_hardware_07 = null,
      semana_pl_hardware_08 = null,
      semana_pl_hardware_09 = null,
      semana_pl_hardware_10 = null,
      semana_pl_hardware_11 = null,
      semana_pl_hardware_12 = null,



      semana_pl_copia_01 = null,
      semana_pl_copia_02 = null,
      semana_pl_copia_03 = null,
      semana_pl_copia_04 = null,
      semana_pl_copia_05 = null,
      semana_pl_copia_06 = null,
      semana_pl_copia_07 = null,
      semana_pl_copia_08 = null,
      semana_pl_copia_09 = null,
      semana_pl_copia_10 = null,
      semana_pl_copia_11 = null,
      semana_pl_copia_12 = null,




      semana_pl_revision_01 = null,
      semana_pl_revision_02 = null,
      semana_pl_revision_03 = null,
      semana_pl_revision_04 = null,
      semana_pl_revision_05 = null,
      semana_pl_revision_06 = null,
      semana_pl_revision_07 = null,
      semana_pl_revision_08 = null,
      semana_pl_revision_09 = null,
      semana_pl_revision_10 = null,
      semana_pl_revision_11 = null,
      semana_pl_revision_12 = null,


      semana_ej_software_01 = null,
      semana_ej_software_02 = null,
      semana_ej_software_03 = null,
      semana_ej_software_04 = null,
      semana_ej_software_05 = null,
      semana_ej_software_06 = null,
      semana_ej_software_07 = null,
      semana_ej_software_08 = null,
      semana_ej_software_09 = null,
      semana_ej_software_10 = null,
      semana_ej_software_11 = null,
      semana_ej_software_12 = null,


      semana_ej_hardware_01 = null,
      semana_ej_hardware_02 = null,
      semana_ej_hardware_03 = null,
      semana_ej_hardware_04 = null,
      semana_ej_hardware_05 = null,
      semana_ej_hardware_06 = null,
      semana_ej_hardware_07 = null,
      semana_ej_hardware_08 = null,
      semana_ej_hardware_09 = null,
      semana_ej_hardware_10 = null,
      semana_ej_hardware_11 = null,
      semana_ej_hardware_12 = null,



      semana_ej_copia_01 = null,
      semana_ej_copia_02 = null,
      semana_ej_copia_03 = null,
      semana_ej_copia_04 = null,
      semana_ej_copia_05 = null,
      semana_ej_copia_06 = null,
      semana_ej_copia_07 = null,
      semana_ej_copia_08 = null,
      semana_ej_copia_09 = null,
      semana_ej_copia_10 = null,
      semana_ej_copia_11 = null,
      semana_ej_copia_12 = null,




      semana_ej_revision_01 = null,
      semana_ej_revision_02 = null,
      semana_ej_revision_03 = null,
      semana_ej_revision_04 = null,
      semana_ej_revision_05 = null,
      semana_ej_revision_06 = null,
      semana_ej_revision_07 = null,
      semana_ej_revision_08 = null,
      semana_ej_revision_09 = null,
      semana_ej_revision_10 = null,
      semana_ej_revision_11 = null,
      semana_ej_revision_12 = null,



      estado = null,
      obser = null,

      //      files = [],
    } = props;

    if (!activoId) return ['activoId property is required', undefined];

    const parseanio = parseNumber(anio);
    const parseagenteId = parseNumber(agenteId);
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
    let newFecha_planeacion = null;
    if (fecha_planeacion) {
      const parsed = new Date(fecha_planeacion);
      if (isNaN(parsed.getTime())) {
        return ['fecha_planeacion must be a valid date', undefined];
      }
      // 👇 Ajustamos hora a 00:00:00
      parsed.setUTCHours(0, 0, 0, 0);
      newFecha_planeacion = parsed;
    }

    let newFecha_ejecucion = null;
    if (fecha_ejecucion) {
      const parsed = new Date(fecha_ejecucion);
      if (isNaN(parsed.getTime())) {
        return ['fecha_ejecucion must be a valid date', undefined];
      }
      // 👇 Ajustamos hora a 00:00:00
      parsed.setUTCHours(0, 0, 0, 0);
      newFecha_ejecucion = parsed;
    }

    // ✅ Retornamos instancia válida
    return [
      undefined,
      new Plan_mantenimientoDto(
        id,
        newFecha,
        parseanio,
        parseagenteId,
        parseUbicacionId,
        parseSucursalId,
        parseAreaId,
        parseActivoId,
        newFecha_planeacion,
        newFecha_ejecucion,



        semana_pl_software_01,
        semana_pl_software_02,
        semana_pl_software_03,
        semana_pl_software_04,
        semana_pl_software_05,
        semana_pl_software_06,
        semana_pl_software_07,
        semana_pl_software_08,
        semana_pl_software_09,
        semana_pl_software_10,
        semana_pl_software_11,
        semana_pl_software_12,


        semana_pl_hardware_01,
        semana_pl_hardware_02,
        semana_pl_hardware_03,
        semana_pl_hardware_04,
        semana_pl_hardware_05,
        semana_pl_hardware_06,
        semana_pl_hardware_07,
        semana_pl_hardware_08,
        semana_pl_hardware_09,
        semana_pl_hardware_10,
        semana_pl_hardware_11,
        semana_pl_hardware_12,



        semana_pl_copia_01,
        semana_pl_copia_02,
        semana_pl_copia_03,
        semana_pl_copia_04,
        semana_pl_copia_05,
        semana_pl_copia_06,
        semana_pl_copia_07,
        semana_pl_copia_08,
        semana_pl_copia_09,
        semana_pl_copia_10,
        semana_pl_copia_11,
        semana_pl_copia_12,




        semana_pl_revision_01,
        semana_pl_revision_02,
        semana_pl_revision_03,
        semana_pl_revision_04,
        semana_pl_revision_05,
        semana_pl_revision_06,
        semana_pl_revision_07,
        semana_pl_revision_08,
        semana_pl_revision_09,
        semana_pl_revision_10,
        semana_pl_revision_11,
        semana_pl_revision_12,


        semana_ej_software_01,
        semana_ej_software_02,
        semana_ej_software_03,
        semana_ej_software_04,
        semana_ej_software_05,
        semana_ej_software_06,
        semana_ej_software_07,
        semana_ej_software_08,
        semana_ej_software_09,
        semana_ej_software_10,
        semana_ej_software_11,
        semana_ej_software_12,


        semana_ej_hardware_01,
        semana_ej_hardware_02,
        semana_ej_hardware_03,
        semana_ej_hardware_04,
        semana_ej_hardware_05,
        semana_ej_hardware_06,
        semana_ej_hardware_07,
        semana_ej_hardware_08,
        semana_ej_hardware_09,
        semana_ej_hardware_10,
        semana_ej_hardware_11,
        semana_ej_hardware_12,



        semana_ej_copia_01,
        semana_ej_copia_02,
        semana_ej_copia_03,
        semana_ej_copia_04,
        semana_ej_copia_05,
        semana_ej_copia_06,
        semana_ej_copia_07,
        semana_ej_copia_08,
        semana_ej_copia_09,
        semana_ej_copia_10,
        semana_ej_copia_11,
        semana_ej_copia_12,




        semana_ej_revision_01,
        semana_ej_revision_02,
        semana_ej_revision_03,
        semana_ej_revision_04,
        semana_ej_revision_05,
        semana_ej_revision_06,
        semana_ej_revision_07,
        semana_ej_revision_08,
        semana_ej_revision_09,
        semana_ej_revision_10,
        semana_ej_revision_11,
        semana_ej_revision_12,



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
