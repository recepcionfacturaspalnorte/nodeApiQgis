import express, { Router } from 'express';
import compression from 'compression';
import path from 'path';
import cors from 'cors'
import fileUpload from 'express-fileupload';

interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}


export class Server {

  private app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }



  async start() {


    //* Configuración CORS
    this.app.use(cors({
      origin: true,

      //origin: 'http://localhost:5173', // tu frontend
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true // si usas cookies o auth
    }))


    //* Middlewares
    this.app.use(express.json()); // raw
    this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded
    /*
    this.app.use(fileUpload({
      limits: { fileSize: 50 * 1024 * 1024 },
    }));
*/
    this.app.use(fileUpload({
      limits: { fileSize: 50 * 1024 * 1024 },
      useTempFiles: true,
      tempFileDir: '/tmp/',
    }));
    this.app.use(compression())

    //* Public Folder
    this.app.use(express.static(this.publicPath));


    //* Routes
    this.app.use(this.routes);


    //* SPA
    this.app.get('*', (req, res) => {
      const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
      res.sendFile(indexPath);
      //res.send('Api');
    });


    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });

  }

}