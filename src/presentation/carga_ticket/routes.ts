import { Router } from 'express';
import { listarTickets, listarTicketsById } from './controller';




export class CargaTicketRoute {


  static get routes(): Router {

    const router = Router();

    router.get('/tickets', listarTickets);
    router.get('/ticketsById', listarTicketsById);

    return router;
  }


}

