export class Series {
    constructor(
        private id: string,
        private title: string,
        private releaseDate: Date,
        private synopsis: string,
        private image: string
    ) {}

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getReleaseDate(): Date {
        return this.releaseDate;
    }

    public setReleaseDate(releaseDate: Date): void {
        this.releaseDate = releaseDate;
    }

    public getSynopsis(): string {
        return this.synopsis;
    }

    public setSynopsis(synopsis: string): void {
        this.synopsis = synopsis
    }

    public getImage(): string {
        return this.image
    }

    public setImage(image: string): void {
        this.image = image
    }
}