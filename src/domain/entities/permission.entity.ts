



export class PermissionEntity {

  constructor(
    public id: string,
    public detalle: string,
    public sistema?: string,
  ) { }


  public static fromObject(object: { [key: string]: any }): PermissionEntity {
    const { id, detalle, sistema } = object;
    if (!id) throw 'Id is required';
    if (!detalle) throw 'detalle is required';


    return new PermissionEntity(id, detalle, sistema)
  }

}


