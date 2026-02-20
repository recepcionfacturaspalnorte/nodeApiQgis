import { prisma } from "../data/postgres";
import { ActivoDto } from "../domain/dtos/activo/activo.dto";


import { PermissionDto } from "../domain/dtos/permission/permission.dto";
import { PaginationDto } from "../domain/dtos/shared/pagination.dto";
import { SucursalDto } from "../domain/dtos/sucursal/sucursal.dto";
import { UbicacionDto } from "../domain/dtos/ubicacion/ubicacion.dto";
import { CustomError } from "../domain/errors/custom.error";


export class QgisService {

  // DI
  constructor() { }




  public async findByCODIGO_LOTE(CODIGO_LOTE: string) {

    const row = await prisma.poligonos_productores.findFirst({
      where: {
        CODIGO_LOTE: CODIGO_LOTE
      },

    })
    return row;
  }





}
