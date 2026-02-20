import { Router } from 'express';

import { UbicacionService } from '../../services/ubicacion.service';
import { SucursalService } from '../../services/sucursal.service';
import { SucursalController } from './controller';


export class SucursalRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new SucursalService();
    const controller = new SucursalController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

