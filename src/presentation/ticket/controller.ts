import { Request, Response } from 'express';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';
import { TicketService } from '../../services/ticket.service';
import { TicketDto } from '../../domain/dtos/ticket/ticket.dto';





export class TicketController {

  //* DI
  constructor(
    public readonly service: TicketService,

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
      const [error, objectDto] = TicketDto.create(req.body);
      if (error) return res.status(400).json(error);

      const {
        imagesToSave = [],

      } = req.body;
      console.log('images en Create TicketController');

      console.log({ imagesToSave });

      const row = await this.service.create(objectDto!, imagesToSave);
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
      //const body = JSON.parse(req.body.data);

      const {
        imagesToSave = [],

      } = req.body;
      console.log('images en Update TicketController');

      console.log({ imagesToSave });
      //return true;
      const [error, objectDto] = TicketDto.create({ ...req.body, id });
      if (error) return res.status(400).json({ error });

      const updated = await this.service.update(objectDto!
        , imagesToSave
      );
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

  public getSummary = async (req: Request, res: Response) => {
    try {
      const row = await this.service.getSummary();
      res.json(row);

    } catch (error) {
      res.status(400).json(error);
    }

  };


  public getSummaryByUserId = async (req: Request, res: Response) => {
    const id = req.params.userId;
    try {
      const row = await this.service.getSummaryByUserId(+id);
      res.json(row);

    } catch (error) {
      res.status(400).json(error);
    }

  };



  public getAllByEstadoTicketId = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const row = await this.service.getAllByEstadoTicketId(id);
      res.json(row);

    } catch (error) {
      res.status(400).json(error);
    }

  };


  public getAllByEstadoTicketUserId = async (req: Request, res: Response) => {
    const id = req.params.id;
    const userId = req.params.userId;
    console.log({ req });


    try {
      const row = await this.service.getAllByEstadoTicketUserId(id, userId);
      res.json(row);

    } catch (error) {
      res.status(400).json(error);
    }

  };


  public getAllByActivoId = async (req: Request, res: Response) => {
    const id = req.params.id;
    const userId = req.params.userId;
    console.log({ req });


    try {
      const row = await this.service.getAllByActivoId(id);
      res.json(row);

    } catch (error) {
      res.status(400).json(error);
    }

  };


}