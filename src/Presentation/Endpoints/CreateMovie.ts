import {Request, Response} from 'express';
import {CreateMovieUC} from '../../Business/Usecases/CreateMovie';
import {MovieDB} from '../../Data/movieDB';


export const createMoviesEndpoint = async(req:Request, res:Response) => {
    try{
        const createMoviesUC = new CreateMovieUC(new MovieDB());
        const result = await createMoviesUC.execute({
            title: req.body.title,
            releaseDate: req.body.releaseDate,
            synopsis: req.body.synopsis,
            link: req.body.link,
            length: req.body.length,
            image: req.body.image 
        });

        res.status(200).send(result)
    }catch (err){
        
    }
}