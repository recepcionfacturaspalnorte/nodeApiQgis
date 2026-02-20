import { Router } from 'express';
import { Tipo_equipoController } from './controller';
import { Tipo_equipoService } from '../../services/tipo_equipo.service';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { verificarPermisos } from '../middlewares/verificarPermisos.middleware';



export class Tipo_equipoRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new Tipo_equipoService();
    const controller = new Tipo_equipoController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', [AuthMiddleware.validateJWT, verificarPermisos('TIPO_EQUIPO-A')], controller.create);
    router.put('/:id', [AuthMiddleware.validateJWT, verificarPermisos('TIPO_EQUIPO-M')], controller.update);
    router.delete('/:id', [AuthMiddleware.validateJWT, verificarPermisos('TIPO_EQUIPO-B')], controller.delete);


    return router;
  }


}

