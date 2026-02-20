import { Request, Response } from 'express';
import { getPalnorteTicketsService } from '../../services/getPalnorteTickets.service';
import { getPalnorteTicketsServiceByID } from '../../services/getPalnorteTicketsById.service';


export const listarTickets = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { fecha1, fecha2, pagina } = req.query;

        if (!fecha1 || !fecha2) {
            return res.status(400).json({
                message: 'fecha1 y fecha2 son requeridas',
            });
        }

        const data = await getPalnorteTicketsService({
            fecha1: String(fecha1),
            fecha2: String(fecha2),
            pagina: Number(pagina) || 1,
        });

        return res.json(data);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error consultando tickets',
        });
    }
};


export const listarTicketsById = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {
        const { id2, pagina } = req.query;

        if (!id2) {
            return res.status(400).json({
                message: 'ID es requerido',
            });
        }

        const data = await getPalnorteTicketsServiceByID({
            fecha1: "2000-01-01",
            fecha2: "2000-01-01",
            pagina: Number(pagina) || 1,
            id2: Number(id2),
        });

        return res.json(data);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error consultando tickets',
        });
    }
};
