const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const route = require('./router');

const app = express();
const port = process.env.PORT||5000;

app.use(cors());
app.use(morgan('combined'));

route(app);

app.listen(port, () => {
    console.log('App started on ', port);
});