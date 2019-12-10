import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api', routes);


export default app;
