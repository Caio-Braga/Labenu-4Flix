import {BaseDB} from './baseDB';
import {Series} from '../Business/Entities/Series';

export class SeriesDB extends BaseDB {
    private serieTableName = "series"; // Checar se esse nome está correto

    public async createSerie(serie: Series): Promise<void> {
        let query = serie.getImage()
        ? `
        INSERT INTO ${
            this.serieTableName
        } (id, title, content, type, image, userId)
        VALUES(
            '${serie.getId()}',
            '${serie.getTitle()}',
            '${serie.getReleaseDate()}',
            '${serie.getSynopsis()}',
            '${serie.getImage()}'
        );`
        :`
        INSERT INTO ${this.serieTableName} (id, title, content, type, userId)
        VALUES(
            '${serie.getId()}',
            '${serie.getTitle}',
            '${serie.getReleaseDate()}',
            '${serie.getSynopsis()}'
        );`;

        await this.connection.raw(query);
    }

    private mapDbSerieToSerie(input?: any): Series | undefined {
        return (
            input &&
            new Series(
                input.id,
                input.title,
                input.releaseDate,
                input.synopsis,
                input.image
            )
        );
    }

    public async getAllSeries(): Promise<Series[]> {
        const result = await this.connection.raw(`
            SELECT * FROM ${this.serieTableName}
        `)
        return result[0].map((res: any) => this.mapDbSerieToSerie(res)!);
    }

    public async getSerieById(id: string): Promise<Series | undefined> {
        const result = await this.connection.raw(`
            SELECT * FROM ${this.serieTableName} WHERE id='${id}'
        `);
        return this.mapDbSerieToSerie(result[0][0]);
    }
}