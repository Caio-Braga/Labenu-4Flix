import {SeriesDB} from '../../Data/seriesDB';

export class GetSeriessUC {
    constructor(private serieDB: SeriesDB) {}
    public async execute(): Promise<GetSeriesUCOutput> {
    const series = await this.serieDB.getAllSeries();
    return {
        series: series.map(series => ({
            id: series.getId(),
            title: series.getTitle(),
            releaseDate: series.getReleaseDate(),
            synopsis: series.getSynopsis(),
            image: series.getImage()
        }))
      }
    }
}

export interface GetSeriesUCOutput {
    series: GetSeriesUCOutputSerie[]
}

export interface GetSeriesUCOutputSerie {
    id: string;
    title: string;
    releaseDate: Date;
    synopsis: string;
    image: string;
}