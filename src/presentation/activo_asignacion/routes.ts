import { Router } from 'express';
import { Activo_asignacionController } from './controller';
import { Activo_asignacionService } from '../../services/activo_asignacion.service';




export class Activo_asignacionRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new Activo_asignacionService();
    const controller = new Activo_asignacionController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

