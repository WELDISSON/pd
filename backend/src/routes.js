import express from 'express';
import discController from './controllers/discController';
import collectionController from './controllers/collectionController';
import discCollectionController from './controllers/discCollectionController';
const app = express.Router();

// app.get('/disc:text', discController.getForText);
app.post('/disc', discController.createDisc);
app.put('/disc:id', discController.updateDisc);
app.get('/discCollection:collectionName', discCollectionController.getDiscsfromcollection);
app.post('/discCollection', discCollectionController.insertDiscInCollection);
app.delete('/discCollection:discName', discCollectionController.deleteDiscFromCollection);
app.post('/collection', collectionController.createCollection);

export default app;
