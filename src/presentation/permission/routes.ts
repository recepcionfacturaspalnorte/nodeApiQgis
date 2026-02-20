import { Router } from 'express';
import { PermissionController } from './controller';
import { PermissionService } from '../../services/permission.service';


export class PermissionRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new PermissionService();
    const controller = new PermissionController(service)


    router.get('/', controller.getPermissions);
    router.get('/getbyuserid', controller.getPermissionsByUserid);
    router.get('/:id', controller.getPermissionById);


    router.post('/', controller.createPermission);
    router.put('/:id', controller.updatePermission);
    router.delete('/:id', controller.deletePermission);


    return router;
  }


}

