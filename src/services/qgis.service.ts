import { prisma } from "../data/postgres";




export class QgisService {

  // DI
  constructor() { }


  public async findByCODIGO_LOTE(CODIGO_LOTE: string) {
    const row = await prisma.$queryRaw<{
      CODIGO_FINCA: string;
      CODIGO_LOTE: string;
      WKT: string;
    }[]>`
    SELECT 
      "CODIGO_FINCA",
      "CODIGO_LOTE",
      ST_AsText(geom) AS WKT
    FROM "poligonos_productores"
    WHERE "CODIGO_LOTE" = ${CODIGO_LOTE}
    LIMIT 1
  `;

    return row.length ? row[0] : null;
  }
  public async findByCODIGO_LOTE2(CODIGO_LOTE: string) {

    const row = await prisma.poligonos_productores.findFirst({
      where: {
        CODIGO_LOTE: CODIGO_LOTE
      },

    })
    return row;
  }





}
