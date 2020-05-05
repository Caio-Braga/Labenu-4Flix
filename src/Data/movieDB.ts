import {BaseDB} from './baseDB';
import {Movie} from '../Business/Entities/Movies';

export class MovieDB extends BaseDB {
    private movieTableName = "movies";

    public async createMovie(movie: Movie): Promise<void>{
        `
            INSERT INTO ${
                this.movieTableName
            } (id, title, content, type, image, userId)
                VALUES(
                    '${movie.getId()}',
                    '${movie.getTitle()}',
                    '${movie.getReleaseDate()}',
                    '${movie.getSynopsis()}',
                    '${movie.getLink()}',
                    '${movie.getLength()}',
                    '${movie.getImage()}'
                );
        `
    }

    private mapDbMovieToMovie(input?: any): Movie | undefined {
        return (
            input &&
            new Movie(
                input.id,
                input.title,
                input.releaseDate,
                input.synopsis,
                input.link,
                input.length,
                input.image
            )
        );
    }

    
    public async getAllMovies(): Promise<Movie[]> {
        const result = await this.connection.raw(`
            SELECT * FROM ${this.movieTableName}
        `)
        return result[0].map((res: any) => this.mapDbMovieToMovie(res)!);
    }

    public async getMovieById(id: string): Promise<Movie | undefined> {
        const result = await this. connection.raw(`
            SELECT * FROM ${this.movieTableName} WHERE id= '${id}'
        `);
        return this.mapDbMovieToMovie(result[0][0]);
    }
}