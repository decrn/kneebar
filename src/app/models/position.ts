import { Item } from './item';
import { Submission } from './submission';

export class Position implements Item {
    name: string;
    title: string;
    description: string;
    related: Position[];
    image: string;
    thumbnail: string;
    video: string;
    submissions: Submission[];

    constructor(name: string, title: string, thumbnail: string, submissions: Submission[]) {
        this.name = name;
        this.title = title;
        this.thumbnail = thumbnail;
        this.submissions = submissions;
    }
}
