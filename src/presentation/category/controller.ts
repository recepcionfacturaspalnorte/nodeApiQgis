import { Request, Response } from 'express';

import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';
import { ProductDto } from '../../domain/dtos/product/product.dto';
import { CategoryService } from '../../services/category.service';
import { CategoryDto } from '../../domain/dtos/category/category.dto';



export class CategoryController {

  //* DI
  constructor(
    public readonly service: CategoryService,

  ) { }


  public getCategories = async (req: Request, res: Response) => {

    console.log("llega a getProducts");
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

    const listado = await this.service.getCategories(paginationDto!, searchStr);
    return res.json(listado);


    //    const lista = await this.authService.getUsers(paginationDto!, searchStr);
    //if (!lista) res.json('No hay usuarios');
    //res.json(lista);


  };

  public getCategoryById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const todo = await this.service.findById(id);
      res.json(todo);

    } catch (error) {
      res.status(400).json({ error });
    }

  };

  public createCategory = async (req: Request, res: Response) => {
    const [error, categoryDto] = CategoryDto.create(req.body);
    if (error) return res.status(400).json(error);
    try {
      const todo = await this.service.createCategory(categoryDto!);
      res.json(todo);

    } catch (error: any) {
      //console.log(error);
      if (error.code === "P2002") {
        return res.status(400).json({ errorCode: error.code, error: "Id Ya Existe" });
      }
      res.json(error);
      //throw CustomError.internalServer( `${ error }` );      
    }

  };


  public updateCategory = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const [error, categoryDto] = CategoryDto.create({ ...req.body, id });
      if (error) return res.status(400).json({ error });

      const updated = await this.service.update(categoryDto!);
      return res.json(updated);

    } catch (error: any) {
      //res.json(error);
      if (error.code === "P2025") {
        return res.status(400).json({ erroCode: error.code, error: "Id No Existe" });
      }
      res.json(error);
    }

  };


  public deleteCategory = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deleted = await this.service.deleteById(id);
      res.json(deleted);

    } catch (error: any) {
      if ((error as any).code === "P2025") {
        return res.status(400).json({ erroCode: error.code, error: "Id No Existe" });
      }
      if ((error as any).code === "P2003") {
        return res.status(400).json({ erroCode: error.code, error: "No se Puede Elimiar. Existen Productos con esta Categoría" });
      }


      //console.log(error);
      res.json(error)
    }

  };



}