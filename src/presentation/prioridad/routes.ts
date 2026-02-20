import { Router } from 'express';
import { PrioridadController } from './controller';
import { PrioridadService } from '../../services/prioridad.service';





export class PrioridadRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new PrioridadService();
    const controller = new PrioridadController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

