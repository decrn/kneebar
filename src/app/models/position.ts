import { Item } from './item';
import { Submission } from './submission';

export class Position implements Item {
    id: string;
    name: string;
    title: string;
    description: string;
    related: Position[];
    image: string;
    thumbnail: string;
    video: string;
    submissions: Submission[];

    constructor(
        id: string, name: string, title: string, description: string,
        image: string, video: string, thumbnail: string, 
        submissions?: Submission[], related?: Position[]
    ) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.description = description;
        this.image = image;
        this.video = video;
        this.thumbnail = thumbnail;
        this.submissions = submissions;
        this.related = related;
    }

    static fromObject(object: any): Position {
        return new Position(
            object._id,
            object.name, object.title, object.description, object.image,
            object.video, object.thumbnail,
            object.submissions.map(s => s instanceof Object ? Submission.fromObject(s) : null),
            object.related ? object.related.map((s) => {
                if (typeof(s) === 'string')
                    return;
                return Position.fromObject(s);
            }): []
        );
    }
}
