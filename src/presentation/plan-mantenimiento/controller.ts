import { Request, Response } from 'express';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';
import { Plan_mantenimientoService } from '../../services/plan-mantenimiento.service';
import { Plan_mantenimientoDto } from '../../domain/dtos/plan-mantenimiento/plan-mantenimiento.dto';





export class Plan_mantenimientoController {

  //* DI
  constructor(
    public readonly service: Plan_mantenimientoService,

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

  public getByCodigo = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const row = await this.service.findByCodigo(id);
      res.json(row);

    } catch (error) {
      res.status(400).json({ error });
    }

  };

  public create = async (req: Request, res: Response) => {
    try {
      const [error, objectDto] = Plan_mantenimientoDto.create(req.body);
      if (error) return res.status(400).json(error);

      const row = await this.service.create(objectDto!);
      if (!row) {
        return res.status(500).json({
          ok: false,
          message: 'No se pudo crear el registro',
        });
      }
      res.json(row);

    } catch (error: any) {
      console.log('error en controller:');
      console.log(error);
      if (error.code === "P2002") {
        return res.status(400).json({ errorCode: error.code, error: "id Ya Existe" });
      }
      ///return res.status(400).json(error);
      //throw CustomError.internalServer( `${ error }` );      
      return res.status(500).json({
        ok: false,
        message: error.message || 'Error interno del servidor',
      });
    }

  };


  public update = async (req: Request, res: Response) => {
    try {
      const id = +req.params.id;
      const anio = +req.params.anio;
      const [error, objectDto] = Plan_mantenimientoDto.create({ ...req.body, id });
      if (error) return res.status(400).json({ error });

      const updated = await this.service.update(objectDto!);
      return res.json(updated);

    } catch (error: any) {
      //res.json(error);
      if (error.code === "P2025") {
        return res.status(400).json({ erroCode: error.code, error: "Id No Existe" });
      }
      return res.status(500).json({
        ok: false,
        message: error.message || 'Error interno del servidor',
      });
    }

  };


  public delete = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deleted = await this.service.deleteById(+id);
      res.json(deleted);

    } catch (error: any) {
      if ((error as any).code === "P2025") {
        return res.status(400).json({ erroCode: error.code, error: "Id No Existe" });
      }

      //console.log(error);
      res.json(error)
    }

  };



}