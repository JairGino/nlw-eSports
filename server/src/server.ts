import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('runing');
})

app.listen(3333);