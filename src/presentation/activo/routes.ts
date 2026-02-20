import { Router } from 'express';
import { ActivoController } from './controller';
import { ActivoService } from '../../services/activo.service';






export class ActivoRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new ActivoService();
    const controller = new ActivoController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

