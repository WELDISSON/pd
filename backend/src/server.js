import http from 'http';
import app from './app';
import db from './database/index';
import env from './config/environment';
import log from 'knoblr';

const normalizePort = (val) => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) return val;
    if (port >= 0) return port;
  
    return false;
  };

const port = normalizePort(env.port || 3001);
const server = http.createServer(app);

const main = async () => {
  try {
    await db;
    server.listen(port, () => log.info(`Listening on ${port}`)); 
  } catch (error) {
    log.error(error)
  }
}
main();
