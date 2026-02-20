

export class UserPermissionDto {
  /*
      id            Int        @id @default(autoincrement())
    userId        Int
    usuario       User       @relation(fields: [userId], references: [id])
    fecha_permiso DateTime
    permissionId  String
    permission    Permission @relation(fields: [permissionId], references: [id])
  */
  private constructor(
    public id: number,
    public userId: number,
    public readonly permissionId: string,
    public readonly fecha_permiso: Date | null,
  ) { }


  get values() {
    const returnObj: { [key: string]: any } = {};


    //return returnObj;

    return {
      ...returnObj,
      ...this

    }
  }


  static create(props: { [key: string]: any }): [string?, UserPermissionDto?] {

    const { id, userId, permissionId, fecha_permiso } = props;

    //if (!id) return ['id property is required', undefined];
    if (!userId) return ['userId property is required', undefined];
    if (!permissionId) return ['permissionId property is required', undefined];
    //let fecha = new Date();
    // Si viene una fecha válida, úsala, si no, genera una nueva
    const fecha = fecha_permiso ? new Date(fecha_permiso) : new Date()
    //if (fecha_permiso) {
    //fecha = new Date(fecha_permiso)
    //}


    return [undefined, new UserPermissionDto(id, +userId, permissionId, fecha)];
  }


}