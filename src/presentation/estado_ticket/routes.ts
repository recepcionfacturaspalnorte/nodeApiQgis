import { Router } from 'express';
import { Estado_ticketController } from './controller';
import { Estado_ticketService } from '../../services/estado_ticket.service';





export class Estado_ticketRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new Estado_ticketService();
    const controller = new Estado_ticketController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

