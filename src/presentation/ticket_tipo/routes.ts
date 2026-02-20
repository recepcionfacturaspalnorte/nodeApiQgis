import { Router } from 'express';


import { AuthMiddleware } from '../middlewares/auth.middleware';
import { verificarPermisos } from '../middlewares/verificarPermisos.middleware';
import { Ticket_tipoService } from '../../services/ticket_tipo.service';
import { Ticket_tipoController } from './controller';




export class Ticket_tipoRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new Ticket_tipoService();
    const controller = new Ticket_tipoController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

