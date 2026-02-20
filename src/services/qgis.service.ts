import { prisma } from "../data/postgres";




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
