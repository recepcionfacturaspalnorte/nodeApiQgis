import { Request, Response } from 'express';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';

import { QgisService } from '../../services/qgis.service';
;


export class QgisController {

  //* DI
  constructor(
    public readonly service: QgisService,

  ) { }


  public getByCodigo = async (req: Request, res: Response) => {
    const CODIGO_LOTE = req.params.id;

    try {
      const row = await this.service.findByCODIGO_LOTE(CODIGO_LOTE);
      res.json(row);

    } catch (error) {
      res.status(400).json({ error });
    }

  };



  public getByCodigo2 = async (req: Request, res: Response) => {
    const CODIGO_LOTE = req.params.id;

    try {
      const row = await this.service.findByCODIGO_LOTE(CODIGO_LOTE);
      res.json(row);

    } catch (error) {
      res.status(400).json({ error });
    }

  };


  public getByCodigoFincaAndLote = async (req: Request, res: Response) => {
    const CODIGO_FINCA = req.params.id;
    const CODIGO_LOTE = req.params.id2;

    try {
      const row = await this.service.findByCodigoLoteAndCodigoFinca(CODIGO_FINCA, CODIGO_LOTE);
      res.json(row);

    } catch (error) {
      res.status(400).json({ error });
    }

  };


}