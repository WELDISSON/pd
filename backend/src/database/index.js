import mysql from 'mysql';
import env from '../config/environment';

const db = mysql.createConnection({
      host     : env.host,
      user     : env.user,
      password : env.password,
      database : env.db
    });

db.connect((err) => {
  if(err) return console.log('error in connect', err);
  return console.log('App is connected with database!');
});


export default db;