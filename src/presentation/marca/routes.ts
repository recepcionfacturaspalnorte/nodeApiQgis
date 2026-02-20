import { Router } from 'express';
import { MarcaController } from './controller';
import { MarcaService } from '../../services/marca.service';




export class MarcaRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new MarcaService();
    const controller = new MarcaController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

