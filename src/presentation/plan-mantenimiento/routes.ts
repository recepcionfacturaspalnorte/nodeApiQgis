import { Router } from 'express';
import { Plan_mantenimientoService } from '../../services/plan-mantenimiento.service';
import { Plan_mantenimientoController } from './controller';






export class Plan_mantenimientoRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new Plan_mantenimientoService();
    const controller = new Plan_mantenimientoController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

