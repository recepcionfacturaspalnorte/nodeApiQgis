import { Router } from 'express';


import { AuthMiddleware } from '../middlewares/auth.middleware';
import { verificarPermisos } from '../middlewares/verificarPermisos.middleware';
import { Tipo_activoService } from '../../services/tipo_activo.service';
import { Tipo_activoController } from './controller';



export class Tipo_activoRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new Tipo_activoService();
    const controller = new Tipo_activoController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', [AuthMiddleware.validateJWT, verificarPermisos('TIPO_ACTIVO-A')], controller.create);
    router.put('/:id', [AuthMiddleware.validateJWT, verificarPermisos('TIPO_ACTIVO-M')], controller.update);
    router.delete('/:id', [AuthMiddleware.validateJWT, verificarPermisos('TIPO_ACTIVO-B')], controller.delete);


    return router;
  }


}

