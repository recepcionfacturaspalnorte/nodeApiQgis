import { emit } from "process";

// 🔍 Helper para validar números o nulos
const parseNumber = (value: any): number | null => {
  if (value === null || value === undefined || value === '') return null;
  const num = Number(value);
  return isNaN(num) ? null : num;
};

export class ActivoDto {


  private constructor(
    public id: number,
    public COD_ACTIVO: string,
    public nombre_activo: string,
    public serial: string | null,
    public tipo_activoId: number | null,
    public marca: string | null,
    public tipo_equipoId: number | null,
    public procesador: string | null,
    public memoria_ram: string | null,
    public sistema_operativo: string | null,
    public almacenamiento: string | null,
    public serial_almacenamiento: string | null,
    public licencia: string | null,
    public licencia_office: string | null,
    public licencia_antivirus: string | null,
    public disponibilidad: number | null,
    public integridad: number | null,
    public confidencialidad: number | null,
    public valor_cuantitativo: number | null,
    public valor_cualitativo: number | null,
    public categoria_activoId: number | null,
    //public images: string[] | null,
    public email: string | null,
    public password1: string | null,
    public password2: string | null,
    public password3: string | null,
    public password4: string | null,
    public password5: string | null,



  ) { }


  get values() {
    const returnObj: { [key: string]: any } = {};

    //return returnObj;

    return {
      ...returnObj,
      ...this

    }
  }


  static create(props: { [key: string]: any }): [string?, ActivoDto?] {

    const {
      id,
      COD_ACTIVO,
      nombre_activo,
      serial = null,
      tipo_activoId = null,
      marca = null,
      tipo_equipoId = null,
      procesador = null,
      memoria_ram = null,
      sistema_operativo = null,
      almacenamiento = null,
      serial_almacenamiento = null,
      licencia = null,
      licencia_office = null,
      licencia_antivirus = null,
      disponibilidad = null,
      integridad = null,
      confidencialidad = null,
      valor_cuantitativo = null,
      valor_cualitativo = null,
      categoria_activoId = null,
      email = null,
      password1 = null,
      password2 = null,
      password3 = null,
      password4 = null,
      password5 = null,
      //      files = [],
    } = props;

    if (!COD_ACTIVO) return ['COD_ACTIVO property is required', undefined];

    if (!nombre_activo) return ['nombre property is required', undefined];
    const parsedDisponibilidad = parseNumber(disponibilidad);
    const parsedIntegridad = parseNumber(integridad);
    const parsedConfidencialidad = parseNumber(confidencialidad);
    const parsedValorCuantitativo = parseNumber(valor_cuantitativo);
    const parsedValorCualitativo = parseNumber(valor_cualitativo);
    const parsedCategoriaActivoId = parseNumber(categoria_activoId);
    const parsedTipoActivoId = parseNumber(tipo_activoId);
    const parsedTipoEquipoId = parseNumber(tipo_equipoId);

    // ✅ Retornamos instancia válida
    return [
      undefined,
      new ActivoDto(
        id,
        COD_ACTIVO,
        nombre_activo,
        serial,
        tipo_activoId,
        marca,
        tipo_equipoId,
        procesador,
        memoria_ram,
        sistema_operativo,
        almacenamiento,
        serial_almacenamiento,
        licencia,
        licencia_office,
        licencia_antivirus,
        parsedDisponibilidad,
        parsedIntegridad,
        parsedConfidencialidad,
        parsedValorCuantitativo,
        parsedValorCualitativo,
        parsedCategoriaActivoId,
        email,
        password1,
        password2,
        password3,
        password4,
        password5,

        //      images,
      ),
    ];
  }


}