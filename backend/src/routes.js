import express from 'express';
import discController from './controllers/discController';
const app = express();

app.get('/', discController.getDisc);
app.post('/disc', discController.createDisc);
// app.put('/disc:id', discController.updateDisc());

export default app;
