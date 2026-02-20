

export class ActivoImageDto {

  private constructor(
    public id: number,
    public readonly url: string,
    public readonly activoId?: number,
    public readonly public_id?: string

  ) { }


  get values() {
    const returnObj: { [key: string]: any } = {};

    //return returnObj;

    return {
      ...returnObj,
      ...this

    }
  }


  static create(props: { [key: string]: any }): [string?, ActivoImageDto?] {

    const { id, url, activoId, public_id } = props;

    if (!url) return ['url property is required', undefined];

    if (!id) return ['id property is required', undefined];


    return [undefined, new ActivoImageDto(id, url, activoId, public_id)];
  }


}