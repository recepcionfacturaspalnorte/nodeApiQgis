import { Router } from 'express';



import { PermissionRoutes } from './permission/routes';
import { ProductRoutes } from './product/routes';
import { CategoryRoutes } from './category/routes';

import { UbicacionRoutes } from './ubicacion/routes';
import { SucursalRoutes } from './sucursal/routes';
import { CargoRoutes } from './cargo/routes';
import { MarcaRoutes } from './marca/routes';
import { AreaRoutes } from './area/routes';
import { Tipo_equipoRoutes } from './tipo_equipo/routes';
import { Categoria_activoRoutes } from './categoria_activo/routes';
import { ActivoRoutes } from './activo/routes';
import { Tipo_activoRoutes } from './tipo_activo/routes';
import { FileUploadRoutes } from './file-upload/routes';
import { ImageRoutes } from './images/routes';
import { ActivoImageRoutes } from './activoImage/routes';
import { Tipo_asignacionRoutes } from './tipo_asignacion/routes';
import { Activo_asignacionRoutes } from './activo_asignacion/routes';
import { Estado_ticketRoutes } from './estado_ticket/routes';
import { TicketRoutes } from './ticket/routes';
import { TicketImageRoutes } from './ticketImage/routes';
import { PrioridadRoutes } from './prioridad/routes';
import { Plan_mantenimientoRoutes } from './plan-mantenimiento/routes';

import { Ticket_tipoRoutes } from './ticket_tipo/routes';
import { CargaTicketRoute } from './carga_ticket/routes';
import { QgisRoutes } from './qgis/routes';





export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    //router.use('/api/auth', Authroutes.routes);


    router.use('/api/qgis', QgisRoutes.routes);



    return router;
  }


}

