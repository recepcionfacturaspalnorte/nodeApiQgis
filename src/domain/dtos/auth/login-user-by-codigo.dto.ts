import { regularExps } from '../../../config';




export class LoginUserDtoByCodigo {

  private constructor(
    public CODIGO: string,
    public password: string,

  ) { }

  static create(object: { [key: string]: any }): [string?, LoginUserDtoByCodigo?] {
    const { CODIGO, password } = object;

    if (!CODIGO) return ['Missing CODIGO'];
    if (!password) return ['Missing password'];
    if (password.length < 6) return ['Password too short'];

    return [undefined, new LoginUserDtoByCodigo(CODIGO, password)];

  }


}