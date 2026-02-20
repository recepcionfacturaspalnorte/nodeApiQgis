import { Router } from 'express';


import { QgisRoutes } from './qgis/routes';





export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    //router.use('/api/auth', Authroutes.routes);


    router.use('/api/qgis', QgisRoutes.routes);




    return router;
  }


}

