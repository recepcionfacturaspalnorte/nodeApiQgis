import { NextFunction, Request, Response } from 'express';
import { JwtAdapter } from '../../config';
import { UserEntity } from '../../domain/entities/user.entity';
import { prisma } from '../../data/postgres';




export class AuthMiddleware {


  static async validateJWT(req: Request, res: Response, next: NextFunction) {

    const authorization = req.header('Authorization');
    if (!authorization) return res.status(401).json({ error: 'No token provided' });
    if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer token' });

    const token = authorization.split(' ').at(1) || '';


    try {

      const payload = await JwtAdapter.validateToken<{ id: string }>(token);
      if (!payload) return res.status(401).json({ error: 'Invalid token' })

      const user = await prisma.user.findFirst({
        where: {
          id: +payload.id
        },

      })
      //UserModel.findById(payload.id);
      if (!user) return res.status(401).json({ error: 'Invalid token - user' });
      // todo: validar si el usuario está activo
      if (!user.isActive) return res.status(401).json({ error: 'User is Inactive' });


      req.body.user = UserEntity.fromObject(user);
      next();

    } catch (error) {

      console.log(error);
      res.status(500).json({ error: 'Internal server error' });

    }

  }

  static async validateAdmin(req: Request, res: Response, next: NextFunction) {

    const authorization = req.header('Authorization');
    if (!authorization) return res.status(401).json({ error: 'No token provided' });
    if (!authorization.startsWith('Bearer ')) return res.status(401).json({ error: 'Invalid Bearer token' });

    const token = authorization.split(' ').at(1) || '';


    try {

      const payload = await JwtAdapter.validateToken<{ id: string }>(token);
      if (!payload) return res.status(401).json({ error: 'Invalid token' })

      const user = await prisma.user.findFirst({
        where: {
          id: +payload.id
        },

      })
      //UserModel.findById(payload.id);
      if (!user) return res.status(401).json({ error: 'Invalid token - user' });
      // todo: validar si el usuario está activo
      if (!user.isActive) return res.status(401).json({ error: 'User is Inactive' });

      if ((user.role !== 'admin')) {
        res.status(401).json({ error: 'Operación Válida solo para Administradores' });
        next();
      }
    } catch (error) {

      console.log(error);
      res.status(500).json({ error: 'Internal server error' });

    }

  }




}


