import { Item } from './item';
import { Submission } from './submission';

export class Position implements Item {
    name: string;
    title: string;
    description: string;
    related: Position[];
    image: string;
    video: string;
    submissions: Submission[];

    constructor(name: string, title: string, submissions: Submission[]) {
        this.name = name;
        this.title = title;
        this.submissions = submissions;
    }
}
