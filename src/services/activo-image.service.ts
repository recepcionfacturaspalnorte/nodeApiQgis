import { equal } from "assert";
import { prisma } from "../data/postgres";
import { ActivoImageDto } from "../domain/dtos/activoImage/activoImage.dto";
import { PaginationDto } from "../domain/dtos/shared/pagination.dto";
import { CustomError } from "../domain/errors/custom.error";
import { FileUploadService } from "./file-upload.service";
import { ActivoImage } from "@prisma/client";


export class ActivoImageService {

  // DI
  constructor(

  ) { }


  async create(objectDto: ActivoImageDto) {


    const created = await prisma.activoImage.create({
      data: objectDto
    })

    return created;

  }


  async update(objectDto: ActivoImageDto) {
    console.log({ objectDto });

    const row = await prisma.activoImage.findFirst({
      where: {
        id: objectDto.id
      }
    })
    if (!row) throw CustomError.notFound('Id no Existe');

    const updated = await prisma.activoImage.update({
      where: {
        id: objectDto.id
      },
      data: objectDto
    })
    return updated;
  }




  public async findById(id: number) {

    const row = await prisma.activoImage.findFirst({
      where: {
        id: id
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
    const where1 = searchStr
      ? {

        id: { equal: +searchStr }

      }
      : {}
    console.log(where1);
    const totalResults = await prisma.activoImage.count({
      //where: where1
    })
    const lista = await prisma.activoImage.findMany({
      //where: where1,
      skip: skip,
      take: limit,
      orderBy: {
        id: 'asc', // 👈 cambia a 'desc' si quieres descendente
      },

    })
    return {


      count: totalResults,
      page,
      limit,
      pages: Math.ceil(totalResults / limit),
      next: `/api/ActivoImage?page=${(page + 1)}&limit=${limit}`,
      prev: (page - 1 > 0) ? `/api/ActivoImage?page=${(page - 1)}&limit=${limit}` : null,

      data: lista

    }
  }

  public async getAllWithoutPagination(searchStr: string) {
    console.log(searchStr);
    const where1 = searchStr
      ? {
        OR: [
          { COD_ActivoImage: { contains: searchStr } },
          { detalle: { contains: searchStr } },


        ],
      }
      : {}
    console.log(where1);
    const totalResults = await prisma.activoImage.count({
      //where: where1
    })
    const lista = await prisma.activoImage.findMany({
      //where: where1,
    })
    return {


      count: totalResults,
      data: lista

    }
  }



  public async deleteById(id: number) {

    const rowSelected = await prisma.activoImage.findUnique({
      where: {
        id: id
      }
    });

    if (rowSelected) {
      //throw CustomError.notFound('Imagen no encontrada');
      try {
        const rowDeleted = await prisma.activoImage.delete({
          where: {
            id: id
          }
        })
        const public_id = rowSelected.public_id;
        // (opcional) borrar imagen en Cloudinary
        if (public_id) {
          //* si el id existe, Borrar en Cloudinary
          const fileUploadService = new FileUploadService();
          const result = await fileUploadService.deleteFile(public_id);
          return {
            result
          };

        }
        return rowDeleted;
      } catch (error) {
        return null;
      }
    }
  }
}