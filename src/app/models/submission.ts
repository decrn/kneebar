import { Item } from './item';

export class Submission implements Item {
    id: string;
    name: string;
    title: string;
    description: string;
    related: Submission[];
    image: string;
    thumbnail: string;
    video: string;
    rating: number;
    tags: string[];

    constructor(
        id: string, name: string, title: string, description: string,
        image: string, video: string, thumbnail: string,
        related?: Submission[]
    ) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.image = image;
        this.video = video;
        this.thumbnail = thumbnail;
        this.related = related;
    }

    static fromObject(object: any): Submission {
        return new Submission(
            object._id,
            object.name, object.title, object.description, object.image,
            object.video, object.thumbnail,
            object.related.map(s => Submission.fromObject(s)));
    }
}
