import { Router } from 'express';
import { MarcaService } from '../../services/marca.service';
import { TicketImageController } from './controller';
import { FileUploadService } from '../../services/file-upload.service';
import { TicketImageService } from '../../services/ticket-image.service';




export class TicketImageRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new TicketImageService();
    const deleteImageservice = new FileUploadService();

    const controller = new TicketImageController(service, deleteImageservice)


    router.get('/', controller.getAll);
    router.get('/all', controller.getAllWithoutPagination);
    router.get('/:id', controller.getById);


    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);


    return router;
  }


}

