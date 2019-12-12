import express from 'express';
import discController from './controllers/discController';
import collectionController from './controllers/collectionController';
import discCollectionController from './controllers/discCollectionController';
const app = express.Router();

// app.get('/disc:text', discController.getForText);
app.post('/disc', discController.createDisc);
app.put('/disc:id', discController.updateDisc);
app.get('/discollection', discCollectionController.getDiscsfromcollection);
app.post('/discollection', discCollectionController.insertDiscInCollection);
app.delete('/discollection', discCollectionController.deleteDiscFromCollection);
app.post('/collection', collectionController.createCollection);

export default app;
