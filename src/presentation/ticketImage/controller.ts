import { Request, Response } from 'express';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';
import { Console } from 'console';
import { FileUploadService } from '../../services/file-upload.service';
import { TicketImageService } from '../../services/ticket-image.service';
import { TicketImageDto } from '../../domain/dtos/ticketImage/ticketImage.dto';


;


export class TicketImageController {

  //* DI
  constructor(
    public readonly service: TicketImageService,
    private readonly fileUploadService: FileUploadService,
  ) { }


  public getAll = async (req: Request, res: Response) => {
    try {
      console.log("llega a getAll");
      const { page = 1, limit = 10 } = req.query;
      const [error, paginationDto] = PaginationDto.create(+page, +limit);
      if (error) return res.status(400).json(error);
      //console.log(req);
      let searchStr = '';
      if (req.query.q) {
        console.log('encontrado search' + req.query.q);

        searchStr = (req.query.q as string).trim() ?? '';
      }

      console.log(searchStr);

      const rows = await this.service.getAll(paginationDto!, searchStr);
      return res.json(rows);


    } catch (error) {
      return res.status(400).json({ error });
    }

  };


  public getAllWithoutPagination = async (req: Request, res: Response) => {
    try {
      let searchStr = '';
      if (req.query.q) {
        console.log('encontrado search' + req.query.q);

        searchStr = (req.query.q as string).trim() ?? '';
      }

      console.log(searchStr);

      const rows = await this.service.getAllWithoutPagination(searchStr);
      return res.json(rows);


    } catch (error) {
      return res.status(400).json({ error });
    }

  };

  public getById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const row = await this.service.findById(+id);
      res.json(row);

    } catch (error) {
      res.status(400).json(error);
    }

  };


  public create = async (req: Request, res: Response) => {
    try {
      const [error, objectDto] = TicketImageDto.create(req.body);
      if (error) return res.status(400).json(error);

      const row = await this.service.create(objectDto!);
      res.json(row);

    } catch (error: any) {
      //console.log(error);
      if (error.code === "P2002") {
        return res.status(400).json({ errorCode: error.code, error: "id Ya Existe" });
      }
      res.json(error);
      //throw CustomError.internalServer( `${ error }` );      
    }

  };


  public update = async (req: Request, res: Response) => {
    try {
      const id = +req.params.id;
      const [error, objectDto] = TicketImageDto.create({ ...req.body, id });
      if (error) return res.status(400).json({ error });

      const updated = await this.service.update(objectDto!);
      return res.json(updated);

    } catch (error: any) {
      //res.json(error);
      if (error.code === "P2025") {
        return res.status(400).json({ erroCode: error.code, error: "Id No Existe" });
      }
      res.json(error);
    }

  };


  public delete = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const rowImage = await this.service.findById(+id);
      console.log({ rowImage });
      if (!rowImage) {
        return res.status(400).json({
          success: false,
          error: "Id No Existe"
        });
      }
      //return res.json(rowImage)
      const nameImage = rowImage?.url;
      const deleted = await this.service.deleteById(+id);
      console.log('borrado en mysql:');

      //console.log(deleted);
      const ruta = rowImage.public_id;
      console.log("Ruta:");

      console.log(ruta);
      if (ruta) {
        const fileDeleted = await this.fileUploadService.deleteFile(ruta);
        console.log("Resultado de Cloudinary Borrado: ");
        console.log({ fileDeleted });


        if (fileDeleted) {
          return res.status(200).json({
            'success': true,
            ...rowImage
          });
        } else {
          console.log('no se borró el archivo');
          return res.status(200).json({
            success: false,
            error: 'Error Interno'
          })

        }

      }
      //res.json(fileDeleted);

    } catch (error: any) {
      if ((error as any).code === "P2025") {
        return res.status(400).json({ erroCode: error.code, error: "Id No Existe" });
      }

      //console.log(error);
      res.json(error)
    }

  };



}