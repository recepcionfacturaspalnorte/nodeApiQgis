import { Router } from 'express';


import { QgisService } from '../../services/qgis.service';
import { QgisController } from './controller';






export class QgisRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new QgisService();
    const controller = new QgisController(service)




    router.get('/:id', controller.getByCodigo);




    return router;
  }


}

