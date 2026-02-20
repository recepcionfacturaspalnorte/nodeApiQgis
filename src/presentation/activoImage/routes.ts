import { Router } from 'express';
import { MarcaService } from '../../services/marca.service';
import { ActivoImageService } from '../../services/activo-image.service';
import { ActivoImageController } from './controller';
import { FileUploadService } from '../../services/file-upload.service';




export class ActivoImageRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new ActivoImageService();
    const deleteImageservice = new FileUploadService();

    const controller = new ActivoImageController(service, deleteImageservice)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

