import { Router } from 'express';


import { PermissionRoutes } from './permission/routes';
import { ProductRoutes } from './product/routes';


import { UbicacionRoutes } from './ubicacion/routes';
import { SucursalRoutes } from './sucursal/routes';
import { Tipo_equipoRoutes } from './tipo_equipo/routes';
import { Tipo_activoRoutes } from './tipo_activo/routes';
import { FileUploadRoutes } from './file-upload/routes';
import { ImageRoutes } from './images/routes';

import { Tipo_asignacionRoutes } from './tipo_asignacion/routes';
import { Activo_asignacionRoutes } from './activo_asignacion/routes';

import { TicketRoutes } from './ticket/routes';
import { TicketImageRoutes } from './ticketImage/routes';
import { PrioridadRoutes } from './prioridad/routes';
import { Plan_mantenimientoRoutes } from './plan-mantenimiento/routes';



import { QgisRoutes } from './qgis/routes';





export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    //router.use('/api/auth', Authroutes.routes);


    router.use('/api/qgis', QgisRoutes.routes);



    return router;
  }


}

