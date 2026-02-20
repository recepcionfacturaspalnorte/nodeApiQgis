import { connect } from 'http2';
import { envs } from './config/envs';
import { prisma } from './data/postgres';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';
import { log } from 'console';
import { title } from 'process';




(async () => {
  main();
  //testBd();

})();


function main() {

  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes,
  });


  server.start();
}