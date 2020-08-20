import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

//wwwminhapi.com.br:3333 ou padrao 80
//localhost:3333/users

app.listen(3333);

