import { Item } from './item';
import { Submission } from './submission';

export class Position extends Item {
    name: string;
    title: string;
    description: string;
    related: Position[];
    image: string;
    video: string;
    submissions: Submission[];

    constructor(name: string, title: string, submissions: Submission[]) {
        super(name, title);
        this.submissions = submissions;
    }
}
