import { Request, Response } from 'express';


import { PermissionDto } from '../../domain/dtos/permission/permission.dto';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';
import { PermissionService } from '../../services/permission.service';


export class PermissionController {

  //* DI
  constructor(
    public readonly service: PermissionService,

  ) { }


  public getPermissions = async (req: Request, res: Response) => {

    console.log("llega a getPermissions");
    const { page = 1, limit = 10 } = req.query;
    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) return res.status(400).json(error);
    //console.log(req);
    let searchStr = '';
    if (req.query.search) {
      console.log('encontrado search' + req.query.search);

      searchStr = (req.query.search as string).trim() ?? '';
    }

    console.log(searchStr);

    const permisos = await this.service.getAll(paginationDto!, searchStr);
    return res.json(permisos);


    //    const lista = await this.authService.getUsers(paginationDto!, searchStr);
    //if (!lista) res.json('No hay usuarios');
    //res.json(lista);


  };

  public getPermissionById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const todo = await this.service.findById(id);
      res.json(todo);

    } catch (error) {
      res.status(400).json({ error });
    }

  };

  public createPermission = async (req: Request, res: Response) => {
    const [error, permissionDto] = PermissionDto.create(req.body);
    if (error) return res.status(400).json(error);
    try {
      const todo = await this.service.createPermission(permissionDto!);
      res.json(todo);

    } catch (error: any) {
      //console.log(error);
      if (error.code === "P2002") {
        return res.status(400).json({ errorCode: error.code, error: "id Ya Existe" });
      }
      res.json(error);
      //throw CustomError.internalServer( `${ error }` );      
    }

  };


  public updatePermission = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const [error, permissionDto] = PermissionDto.create({ ...req.body, id });
      if (error) return res.status(400).json({ error });

      const updated = await this.service.update(permissionDto!);
      return res.json(updated);

    } catch (error: any) {
      //res.json(error);
      if (error.code === "P2025") {
        return res.status(400).json({ erroCode: error.code, error: "Id No Existe" });
      }
      res.json(error);
    }

  };


  public deletePermission = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deletedTodo = await this.service.deleteById(id);
      res.json(deletedTodo);

    } catch (error: any) {
      if ((error as any).code === "P2025") {
        return res.status(400).json({ erroCode: error.code, error: "Id No Existe" });
      }

      console.log(error);
      res.json(error)
    }

  };




  public getPermissionsByUserid = async (req: Request, res: Response) => {
    try {
      console.log('llega getPermissionsByUserid');


      const { page = 1, limit = 100, userId } = req.query;
      const [error, paginationDto] = PaginationDto.create(+page, +limit);
      if (error) return res.status(400).json(error);
      console.log('userId');
      console.log({ userId });

      if (typeof userId === 'undefined') {
        return res.status(400).json({ error: 'userId is required' });
      }
      if (userId === 'new') {
        return res.json([]);
      }

      const permisos = await this.service.findPermissionsByUserid(+userId, paginationDto!);
      return res.json(permisos);


    } catch (error) {
      return res.json(error);
    }

    //    const lista = await this.authService.getUsers(paginationDto!, searchStr);
    //if (!lista) res.json('No hay usuarios');
    //res.json(lista);


  };


}