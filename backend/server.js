import express from 'express';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
// import morgan from 'morgan';

import routes from './routes';

dotenv.config();

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors());
// app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello');
});

app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);
});

app.use('/api', routes);

app.listen(process.env.PORT, () => console.log('Process started @ port ' + process.env.PORT));
