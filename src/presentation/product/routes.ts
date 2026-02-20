import { Router } from 'express';
import { ProductController } from './controller';
import { PermissionService } from '../../services/permission.service';
import { ProductService } from '../../services/product.service';


export class ProductRoutes {


  static get routes(): Router {

    const router = Router();

    const service = new ProductService();
    const controller = new ProductController(service)


    router.get('/', controller.getProducts);
    router.get('/:id', controller.getProductById);

    router.post('/', controller.createProduct);
    router.put('/:id', controller.updateProduct);
    router.delete('/:id', controller.deleteProduct);


    return router;
  }


}

