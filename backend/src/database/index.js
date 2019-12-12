import mysql from 'mysql';
import env from '../config/environment';
import log from 'knoblr';

const db = mysql.createConnection({
      host     : env.host,
      user     : env.user,
      password : env.password,
      database : env.db
    });
    
db.connect((err) => {
  if(err) {
    console.log(err);
    return log.error('error in connect', err);
  }
  return log.info('App is connected with database!');
});

export default db;
