import dotenv from 'dotenv'

dotenv.config();

const env = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    db: process.env.DB_DATABASE,
    port: process.env.PORT 
}
export default env;