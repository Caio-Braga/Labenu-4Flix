import {MovieDB} from '../../Data/movieDB'

export class GetMoviesByIdUC {
    constructor(private db: MovieDB) {}

    public async execute(input: GetFilmsByIdUCInput): Promise<GetFilmsByIdUCOutput>{

        const movie = await this.db.getMovieById(input.id);

        if(!movie) {
            throw new Error("Movie not found")
        }

        return{
            id: movie.getId(),
            title: movie.getTitle(),
            releaseDate: movie.getReleaseDate(),
            synopsis: movie.getSynopsis(),
            link: movie.getLink(),
            length: movie.getLength(),
            image: movie.getImage()
        }
    }
}

export interface GetFilmsByIdUCInput {
    id: string;
}

export interface GetFilmsByIdUCOutput {
    id: string;
    title: string,
    releaseDate: Date,
    synopsis: string,
    link: string,
    length: number,
    image?: string
}