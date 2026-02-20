


import { equal } from 'assert';
import { bcryptAdapter, envs, JwtAdapter } from '../config';
import { prisma } from '../data/postgres';
import { LoginUserDtoByCodigo } from '../domain/dtos/auth/login-user-by-codigo.dto';
import { LoginUserDto } from '../domain/dtos/auth/login-user.dto';
import { RegisterUserDto } from '../domain/dtos/auth/register-user.dto';
import { PaginationDto } from '../domain/dtos/shared/pagination.dto';
import { UserEntity } from '../domain/entities/user.entity';
import { CustomError } from '../domain/errors/custom.error';
import { EmailService } from './email.service';
import { Prisma } from '@prisma/client';




export class AuthService {

  // DI
  constructor(
    // DI - Email Service
    private readonly emailService: EmailService,
  ) { }


  public async getUsers(paginationDto: PaginationDto, searchStr: string) {
    const { page, limit } = paginationDto;
    console.log(page, limit);
    const skip = (page - 1) * limit;
    console.log(skip);
    //let searchStr = "%" + search + "%";
    console.log(searchStr);
    //console.log('searchStr:', searchStr);
    //console.log('like:', `%${searchStr}%`);
    const where1 = searchStr
      ? {
        OR: [
          { CODIGO: { contains: searchStr } },
          { name: { contains: searchStr } },
          { lastname: { contains: searchStr } },
          { email: { contains: searchStr } },

        ],
      }
      : {}
    console.log(where1);
    const totalUsers = await prisma.user.count({
      //where: where1
      where: {
        OR: [
          { CODIGO: { contains: searchStr } },
          { name: { contains: searchStr } },
          { lastname: { contains: searchStr } },
          { email: { contains: searchStr } },

        ],
      }
    })
    const users = await prisma.user.findMany({
      where: where1,
      skip: skip,
      take: limit,
      select: {
        id: true,
        email: true,
        name: true,
        lastname: true,
        isActive: true,
        role: true,
        emailValidated: true,
        CODIGO: true,
        foto: true,
        // add other fields you want to include, but exclude password
      }
    })
    return {

      count: totalUsers,
      page,
      limit,
      pages: Math.ceil(totalUsers / limit),

      data: users

    }
  }

  public async getUsersAgente(paginationDto: PaginationDto, searchStr: string) {
    const { page, limit } = paginationDto;
    console.log(page, limit);
    const skip = (page - 1) * limit;
    console.log(skip);
    //let searchStr = "%" + search + "%";
    console.log(searchStr);
    //console.log('searchStr:', searchStr);
    //console.log('like:', `%${searchStr}%`);
    const where1 = searchStr
      ? { isAgente: true }
      : {}
    console.log(where1);
    const totalUsers = await prisma.user.count({
      where: {
        isAgente: true
      },
    })
    const users = await prisma.user.findMany({
      where: {
        isAgente: true
      },
      skip: skip,
      take: limit,
      select: {
        id: true,
        email: true,
        name: true,
        lastname: true,
        isActive: true,
        role: true,
        emailValidated: true,
        CODIGO: true,
        foto: true,
        // add other fields you want to include, but exclude password
      }
    })
    return {

      count: totalUsers,
      page,
      limit,
      pages: Math.ceil(totalUsers / limit),

      data: users

    }
  }

  public async checkAuthStatus(token: string) {
    const payload = await JwtAdapter.validateToken(token);
    //console.log({ payload });

    if (!payload) throw CustomError.unauthorized('Invalid token');

    const { email } = payload as { email: string };
    if (!email) throw CustomError.internalServer('Email not in token');

    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    });
    if (!user) throw CustomError.internalServer('Email not exists');

    const newToken = await JwtAdapter.generateToken({ id: user.id, email: user.email });
    //console.log('genera token');

    if (!token) throw CustomError.internalServer('Error while creating JWT');
    const { ...userEntity } = UserEntity.fromObject(user);
    return {
      user: userEntity,
      token: newToken,
    }
  }

  public async findById(id: number) {

    const user = await prisma.user.findFirst({
      where: {
        id: id
      }
    })
    return user;
  }




  public async createPalnorteUser(registerUserDto: RegisterUserDto) {

    const existUser = await prisma.user.findFirst({
      where: {
        //email: registerUserDto.email
        CODIGO: registerUserDto.CODIGO,
      }
    });
    if (existUser) throw CustomError.badRequest('CODIGO already exist');

    try {
      // Encriptar la contraseña
      let hashPassword = bcryptAdapter.hash(registerUserDto.password);
      registerUserDto.password = hashPassword;
      const user = await prisma.user.create({
        data: {
          ...registerUserDto
        }

      });
      console.log(user);

      // Email de confirmación
      //await this.sendEmailValidationLink(user.email);

      const { password, ...userEntity } = UserEntity.fromObject(user);

      return {
        user: userEntity,

      };

    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }

  }


  public async registerUser(registerUserDto: RegisterUserDto) {

    const existUser = await prisma.user.findFirst({
      where: {
        email: registerUserDto.email
      }
    });
    if (existUser) throw CustomError.badRequest('Email already exist');

    try {
      // Encriptar la contraseña
      let hashPassword = bcryptAdapter.hash(registerUserDto.password);
      registerUserDto.password = hashPassword;
      const user = await prisma.user.create({
        data: {
          ...registerUserDto
        }

      });
      console.log(user);

      // Email de confirmación
      //await this.sendEmailValidationLink(user.email);

      const { password, ...userEntity } = UserEntity.fromObject(user);

      const token = await JwtAdapter.generateToken({ id: user.id });
      if (!token) throw CustomError.internalServer('Error while creating JWT');

      return {
        user: userEntity,
        token: token,
      };

    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }

  }


  public async loginUser(loginUserDto: LoginUserDto) {

    const user = await prisma.user.findFirst({
      where: {
        email: loginUserDto.email

      }
    });
    if (!user) {
      throw CustomError.badRequest('Email not exist');
    } else {
      console.log('Email Existe');

    }


    const isMatching = bcryptAdapter.compare(loginUserDto.password, user.password!);
    if (!isMatching) {
      throw CustomError.badRequest('Password is not valid');
    }
    console.log('Passwor valido');


    const { password, ...userEntity } = UserEntity.fromObject(user);
    console.log('Crea el objeto');

    const token = await JwtAdapter.generateToken({ id: user.id, email: user.email });
    console.log('genera token');

    if (!token) throw CustomError.internalServer('Error while creating JWT');

    return {
      user: userEntity,
      token: token,
    }

  }

  public async loginUserByCode(loginUserDtoByCodigo: LoginUserDtoByCodigo) {

    const user = await prisma.user.findFirst({
      where: {
        CODIGO: loginUserDtoByCodigo.CODIGO

      }
    });
    if (!user) {
      throw CustomError.badRequest('CODIGO not exist');
    } else {
      console.log('CODIGO Existe');

    }


    const isMatching = bcryptAdapter.compare(loginUserDtoByCodigo.password, user.password!);
    if (!isMatching) {
      throw CustomError.badRequest('Password is not valid');
    }
    console.log('Password valido');


    const { password, ...userEntity } = UserEntity.fromObject(user);
    console.log('Crea el objeto');

    const token = await JwtAdapter.generateToken({ id: user.id, email: user.email });
    console.log('genera token');

    if (!token) throw CustomError.internalServer('Error while creating JWT');

    return {
      user: userEntity,
      token: token,
    }

  }


  private sendEmailValidationLink = async (email: string) => {

    const token = await JwtAdapter.generateToken({ email });
    if (!token) throw CustomError.internalServer('Error getting token');

    const link = `${envs.WEBSERVICE_URL}/auth/validate-email/${token}`;
    const html = `
      <h1>Validate your email</h1>
      <p>Click on the following link to validate your email</p>
      <a href="${link}">Validate your email: ${email}</a>
    `;

    const options = {
      to: email,
      subject: 'Validate your email',
      htmlBody: html,
    }

    const isSent = await this.emailService.sendEmail(options);
    if (!isSent) throw CustomError.internalServer('Error sending email');

    return true;
  }



  async update(userDto: LoginUserDto, id: number) {
    console.log('usedto');
    console.log({ userDto });
    try {
      const user = await prisma.user.findFirst({
        where: {
          id: id
        }
      })

      const updated = await prisma.user.update({
        where: {
          id: id
        },
        data: userDto
      })
      return updated;
    } catch (error) {
      console.log("edu error:");

      console.log({ error });
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.message.includes("constraint")) {
          throw CustomError.badRequest("Código ya Existe");
        } else {
          throw CustomError.internalServer(`${error}`);
        }
        //if(error.)

      } else {
        throw CustomError.internalServer(`${error}`);
      }
    }
  }



  public validateEmail = async (token: string) => {

    const payload = await JwtAdapter.validateToken(token);
    if (!payload) throw CustomError.unauthorized('Invalid token');

    const { email } = payload as { email: string };
    if (!email) throw CustomError.internalServer('Email not in token');

    const user = await prisma.user.findFirst({
      where: {
        email: email
      }
    });
    if (!user) throw CustomError.internalServer('Email not exists');

    user.emailValidated = true;
    await prisma.user.update({
      data: {
        emailValidated: user.emailValidated
      },
      where: {
        id: user.id
      }
    })

    return true;
  }


  public async deleteById(id: number) {

    const deleted = await prisma.user.delete({
      where: {
        id: id
      }
    })
    return deleted;
  }

}