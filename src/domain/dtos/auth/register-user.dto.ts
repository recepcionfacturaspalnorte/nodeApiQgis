import { regularExps } from '../../../config';




export class RegisterUserDto {

  private constructor(
    public name: string,
    public lastname: string,
    public email: string,
    public password: string,
    public role: string,
    public isActive?: boolean,
    public emailValidated?: boolean,
    public CODIGO?: string,
    public isAgente?: boolean,
  ) { }

  static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { CODIGO, name, lastname, email, password, role = "User",
      isActive = false,
      isAgente = false,
      emailValidated = false } = object;

    let bisActive = this.toBoolean(isActive);
    let bemailValidated = this.toBoolean(emailValidated);
    let bisAgente = this.toBoolean(isAgente);
    if (!name) return ['Missing name'];
    if (!name) return ['Missing lastname'];

    if (!email) return ['Missing email'];
    if (!regularExps.email.test(email)) return ['Email is not valid'];
    if (!password) return ['Missing password'];
    if (password.length < 6) return ['Password too short'];
    return [undefined, new RegisterUserDto(name, lastname, email, password, role, bisActive, bemailValidated, CODIGO, bisAgente)];

  }

  static toBoolean(value: any): boolean {
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
      return value.toLowerCase() === 'true' || value === '1' || value.toLowerCase() === 'on';
    }
    if (typeof value === 'number') return value === 1;
    return false;
  }

}