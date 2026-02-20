import { Router, Request, Response, NextFunction } from 'express';
import { Tipo_equipoService } from '../../services/tipo_equipo.service';
import { prisma } from '../../data/postgres';

interface Permission {
    id: number;
    userId: number;
    fecha_permiso: string | Date;
    permissionId: string;
}

// Middleware genérico para validar permisos
export const verificarPermisos = (permiso: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body.user);

        const permissionVerified = await prisma.user_permission.findFirst({
            where: {
                userId: req.body.user.id,
                permissionId: permiso
            }
        });
        console.log('verified:' + permiso);

        console.log({ permissionVerified });


        if (!permissionVerified) {
            console.log('No tiene el permiso');

            return res.status(403).json({ message: `No tiene los permisos requeridos` });
        } else {
            console.log('Tiene el Permiso');
        }

        next();
    };
};

