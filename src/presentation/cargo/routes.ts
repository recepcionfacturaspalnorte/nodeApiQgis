import { Router } from 'express';

import { CargoService } from '../../services/cargo.service';
import { CargoController } from './controller';



export class CargoRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new CargoService();
    const controller = new CargoController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

