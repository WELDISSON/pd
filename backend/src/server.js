import http from 'http';
import app from './app';
import db from './database/index';

const normalizePort = (val) => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) return val;
    if (port >= 0) return port;
  
    return false;
  };
const port = normalizePort("3000");
const server = http.createServer(app);

const connectDatabase = async () => {
  await db;
  return server.listen(port, () => console.log(`Listening on ${port}`)); 
}

try {
  connectDatabase()
} catch (error) {
  console.log(error)
}