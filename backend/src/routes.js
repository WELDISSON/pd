import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('WELCOME')
});

export default app;