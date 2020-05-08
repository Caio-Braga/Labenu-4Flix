import {Request, Response} from 'express';
import {MovieDB} from '../../Data/movieDB';
import {GetMoviesByIdUC} from '../../Business/Usecases/GetMoviesById';

export const getMoviesByIdEndpoint = async (req: Request, res: Response) => {
    try {
        const getFimlsByIdUC = new GetMoviesByIdUC(new MovieDB());
        const result = await getFimlsByIdUC.execute({
            id: req.params.id
        });

        res.status(200).send(result)
    } catch (err) {
             
    }
}
