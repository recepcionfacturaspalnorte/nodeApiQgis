import { equal } from "assert";
import { prisma } from "../data/postgres";
import { Activo_asignacionDto } from "../domain/dtos/activo-asignacion/activo-asignacion.dto";
import { PaginationDto } from "../domain/dtos/shared/pagination.dto";
import { CustomError } from "../domain/errors/custom.error";
import { response } from "express";
import { log } from "console";


export class Activo_asignacionService {

  // DI
  constructor() { }


  async create(objectDto: Activo_asignacionDto
  ) {

    const exist = await this.findActivoDisponibleById(+objectDto.activoId!);
    if (exist) throw Error('Activo no se Encuentra disponible.')
    /*
          if (exist) {
          // ⚠️ Error personalizado
          return res.status(404).json({
            ok: false,
            message: `Activo No se Encuentra disponible.`,
          });
        }
    */
    try {


      const created = await prisma.activo_asignacion.create({
        data: objectDto,
        include: {
          responsable: {
            select: {
              id: true,
              lastname: true,
              name: true,
              email: true,
              // 👇 no incluimos password
            },
          },
          tipo_asignacion: true,
          activo: true,
          sucursal: true,
          ubicacion: true,
          area: true,
        },
      })

      return created;

    } catch (error) {
      console.log(error);
      return error;
    }

  }


  async update(objectDto: Activo_asignacionDto) {
    console.log("LLega a update Service");

    console.log({ objectDto });
    console.log("******************************");


    const row = await prisma.activo_asignacion.findFirst({
      where: {
        id: objectDto.id
      }
    })
    log("fila encontrada:");
    console.log(row);
    console.log("--------------------------------");
    console.log("código de ActivoID:" + objectDto.activoId);

    if (!row) throw CustomError.notFound('Id no Existe');
    const counter = await this.countActivoDisponibleById(+objectDto.activoId!);
    console.log("counter:");
    console.log(counter);


    if (counter > 1) throw CustomError.badRequest('Codigo de Activo no Válido');
    const exist = await this.findActivoDisponibleById(+objectDto.activoId!);
    //if (exist === null) throw CustomError.badRequest('Id de Activo no Existe');
    if (exist === null) {
      // Activo No se ha asignado todavía.
    } else {
      //Ya está asignado
      if (exist.id !== objectDto.id) throw CustomError.badRequest('Código de Activo Ya se Encuentra Asignado');
    }


    const updated = await prisma.activo_asignacion.update({
      where: {
        id: objectDto.id
      },
      data: objectDto
    })
    return updated;
  }


  public async countActivoDisponibleById(id: number) {

    const row = await prisma.activo_asignacion.count({
      where: {
        AND: [
          { activoId: id },
          { fecha_entrega: null }
        ]


      },

    })


    return row;

  }


  public async findActivoDisponibleById(id: number) {

    const row = await prisma.activo_asignacion.findFirst({
      where: {
        AND: [
          { activoId: id },
          { fecha_entrega: null }
        ]


      },
      include: {
        responsable: {
          select: {
            id: true,
            CODIGO: true,
            lastname: true,
            name: true,
            email: true,
            // 👇 no incluimos password
          },
        },
        tipo_asignacion: true,
        activo: {
          include: {
            images: true, // 👈 incluye la tabla relacionada de imágenes
          },
        },
        sucursal: true,
        ubicacion: true,
        area: true,
      },

    })
    if (!row) return null;

    return {
      ...row,
      fechaFormatted: row.fecha
        ? row.fecha.toISOString().split('T')[0]
        : '',
      fecha_entregaFormatted: row.fecha_entrega
        ? row.fecha_entrega.toISOString().split('T')[0]
        : '',
    }
  }


  public async findById(id: number) {

    const row = await prisma.activo_asignacion.findFirst({
      where: {
        id: id
      },
      include: {
        responsable: {
          select: {
            id: true,
            CODIGO: true,
            lastname: true,
            name: true,
            email: true,
            // 👇 no incluimos password
          },
        },
        tipo_asignacion: true,
        activo: {
          include: {
            images: true, // 👈 incluye la tabla relacionada de imágenes
          },
        },
        sucursal: true,
        ubicacion: true,
        area: true,
      },

    })
    if (!row) return null;

    return {
      ...row,
      fecha: row.fecha
        ? row.fecha.toISOString().split('T')[0]
        : '',
      fecha_entrega: row.fecha_entrega
        ? row.fecha_entrega.toISOString().split('T')[0]
        : '',
    }
  }



  public async findByCodigo(codigo: string) {

    const row = await prisma.activo_asignacion.findFirst({
      where: {
        activoId: +codigo
      }
    })
    return row;
  }





  public async getAll(paginationDto: PaginationDto, searchStr: string) {
    const { page, limit } = paginationDto;
    console.log(page, limit);
    const skip = (page - 1) * limit;
    console.log(skip);
    console.log(searchStr);

    const totalResults = await prisma.activo_asignacion.count({
      where: {
        OR: [
          {
            activo: {
              serial: {
                contains: searchStr,

              },
              nombre_activo: {
                contains: searchStr,

              },

            },
          },

          {
            responsable: {
              CODIGO: {
                contains: searchStr,

              },

            },

          },
          {
            responsable: {
              name: {
                contains: searchStr,

              },

            },

          },
          {
            responsable: {
              lastname: {
                contains: searchStr,

              },

            },

          }


        ]

      },

    })
    const lista = await prisma.activo_asignacion.findMany({


      where: {
        OR: [

          {
            activo: {
              serial: {
                contains: searchStr,

              },

            },
          },


          {
            activo: {
              nombre_activo: {
                contains: searchStr,

              },

            },
          },

          {
            responsable: {
              CODIGO: {
                contains: searchStr,

              },

            },

          },
          {
            responsable: {
              name: {
                contains: searchStr,

              },

            },

          },
          {
            responsable: {
              lastname: {
                contains: searchStr,

              },

            },

          }


        ]

      },
      skip: skip,
      take: limit,
      include: {
        responsable: {
          select: {
            id: true,
            CODIGO: true,
            lastname: true,
            name: true,
            email: true,
            // 👇 no incluimos password
          },
        },
        tipo_asignacion: true,
        activo: true,
        sucursal: true,
        ubicacion: true,
        area: true,
      },
      orderBy: {
        activoId: 'asc', // 👈 cambia a 'desc' si quieres descendente
      },

    })

    const listaFormatted = lista.map(item => ({
      ...item,
      fechaFormatted: item.fecha ? item.fecha.toISOString().split('T')[0] : null,
      fecha_entregaFormatted: item.fecha_entrega ? item.fecha_entrega.toISOString().split('T')[0] : null,
    }));
    return {


      count: totalResults,
      page,
      limit,
      pages: Math.ceil(totalResults / limit),
      next: `/api/Activo_asignacion?page=${(page + 1)}&limit=${limit}`,
      prev: (page - 1 > 0) ? `/api/Activo_asignacion?page=${(page - 1)}&limit=${limit}` : null,

      data: listaFormatted

    }
  }

  public async getAllWithoutPagination(searchStr: string) {
    console.log(searchStr);
    const where1 = searchStr
      ? {

        id: { equals: +searchStr }




      }
      : {}
    console.log(where1);
    const totalResults = await prisma.activo_asignacion.count({
      where: where1
    })
    const lista = await prisma.activo_asignacion.findMany({
      where: where1,
    })
    return {


      count: totalResults,
      data: lista

    }
  }



  public async deleteById(id: number) {
    try {
      const row = await prisma.activo_asignacion.delete({
        where: {
          id: id
        }
      })
      return row;
    } catch (error) {
      throw error;
    }

  }

}
