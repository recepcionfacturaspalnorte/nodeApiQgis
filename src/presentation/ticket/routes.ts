import { Router } from 'express';
import { TicketController } from './controller';
import { TicketService } from '../../services/ticket.service';





export class TicketRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new TicketService();
    const controller = new TicketController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/summary', controller.getSummary);
    router.get('/summary/:userId', controller.getSummaryByUserId);
    router.get('/getAllByEstadoTicketId/:id', controller.getAllByEstadoTicketId);
    router.get('/getAllByEstadoTicketId/:id/:userId', controller.getAllByEstadoTicketUserId);
    router.get('/getAllByActivoId/:id', controller.getAllByActivoId);

    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

