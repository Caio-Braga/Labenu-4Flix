import {MovieDB} from '../../Data/movieDB';
import {Movie} from '../Entities/Movies';
import {v4} from 'uuid';

export class CreateMovieUC {
    constructor(private db: MovieDB) {}

    public async execute(input: CreateMovieUCInput): Promise<CreateMovieUCOutput> {
        const id = v4();

        const movie = new Movie(
            id,
            input.title,
            input.releaseDate,
            input.synopsis,
            input.link,
            input.length,
            input.image
        );

        await this.db.createMovie(movie);

        return {
            message: "Film created sucessfully"
        };
    }
}

export interface CreateMovieUCInput {
    title: string;
    releaseDate: Date;
    synopsis: string;
    link: string;
    length: number;
    image: string;
}

export interface CreateMovieUCOutput {
    message: string;
}