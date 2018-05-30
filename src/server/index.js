import express from 'express';
import cors from 'cors';
import route from './router';

const app = express();
const port = process.env.PORT||5000;

app.use(cors());

route(app);

app.listen(port, () => {
    console.log('App started on ', port);
});