import { CreateTodoDto, UpdateTodoDto } from '../dtos';
import { PermissionDto } from '../dtos/permission/permission.dto';
import { PermissionEntity } from '../entities/permission.entity';
import { TodoEntity } from '../entities/todo.entity';



export abstract class PermisisionDatasource {

  abstract create(createPermissionDto: PermissionDto): Promise<PermissionEntity>;

  //todo: paginación
  abstract getAll(): Promise<PermissionEntity[]>;

  abstract findById(id: string): Promise<PermissionEntity>;
  abstract updateById(createPermissionDto: PermissionDto): Promise<PermissionEntity>;
  abstract deleteById(id: string): Promise<PermissionEntity>;

}