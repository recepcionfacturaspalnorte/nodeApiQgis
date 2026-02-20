import { Router } from 'express';
import { Tipo_asignacionService } from '../../services/tipo_asignacion.service';
import { Tipo_asignacionController } from './controller';





export class Tipo_asignacionRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new Tipo_asignacionService();
    const controller = new Tipo_asignacionController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

