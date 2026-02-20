import { Router } from 'express';
import { PermissionController } from './controller';
import { UbicacionService } from '../../services/ubicacion.service';


export class UbicacionRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new UbicacionService();
    const controller = new PermissionController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

