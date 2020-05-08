import express from 'express';
import {createMoviesEndpoint} from './Endpoints/CreateMovie';
import {getMoviesByIdEndpoint} from './Endpoints/GetMovieById';

const app = express();
app.use(express.json());

app.post('/create/movie', createMoviesEndpoint);
app.get('/movies/:id', getMoviesByIdEndpoint);

export default app;