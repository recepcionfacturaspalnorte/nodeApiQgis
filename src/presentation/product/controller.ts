import { Request, Response } from 'express';



import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';
import { ProductService } from '../../services/product.service';
import { ProductDto } from '../../domain/dtos/product/product.dto';



export class ProductController {

  //* DI
  constructor(
    public readonly service: ProductService,

  ) { }


  public getProducts = async (req: Request, res: Response) => {

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

    const listado = await this.service.getAll(paginationDto!, searchStr);
    return res.json(listado);


    //    const lista = await this.authService.getUsers(paginationDto!, searchStr);
    //if (!lista) res.json('No hay usuarios');
    //res.json(lista);


  };

  public getProductById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const todo = await this.service.findById(+id);
      res.json(todo);

    } catch (error) {
      res.status(400).json({ error });
    }

  };

  public createProduct = async (req: Request, res: Response) => {
    const [error, productDto] = ProductDto.create(req.body);


    console.log(productDto);

    if (error) return res.status(400).json(error);
    try {
      const todo = await this.service.createProduct(productDto!);
      res.json(todo);

    } catch (error: any) {
      //console.log(error);
      if (error.code === "P2002") {
        return res.status(400).json({ errorCode: error.code, error: "REF Ya Existe" });
      }
      res.json(error);
      //throw CustomError.internalServer( `${ error }` );      
    }

  };


  public updateProduct = async (req: Request, res: Response) => {
    try {
      const id = +req.params.id;
      const [error, permissionDto] = ProductDto.create({ ...req.body, id });
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


  public deleteProduct = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
      const deleted = await this.service.deleteById(+id);
      res.json(deleted);

    } catch (error: any) {
      if ((error as any).code === "P2025") {
        return res.status(400).json({ erroCode: error.code, error: "Id No Existe" });
      }

      console.log(error);
      res.json(error)
    }

  };



}