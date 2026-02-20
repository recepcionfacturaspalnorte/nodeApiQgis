import { Router } from 'express';
import { AreaService } from '../../services/area.service';
import { AreaController } from './controller';






export class AreaRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new AreaService();
    const controller = new AreaController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

