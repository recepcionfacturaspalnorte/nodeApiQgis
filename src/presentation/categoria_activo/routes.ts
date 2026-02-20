import { Router } from 'express';
import { Categoria_activoController } from './controller';
import { Categoria_activoService } from '../../services/categoria_activo.service';





export class Categoria_activoRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new Categoria_activoService();
    const controller = new Categoria_activoController(service)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

