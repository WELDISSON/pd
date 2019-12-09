import dotenv from 'dotenv'

dotenv.config();

const database = {
    host: process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    db : process.env.DB
}

export default database;