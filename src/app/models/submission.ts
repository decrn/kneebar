import { Item } from './item';

export class Submission implements Item {
    name: string;
    title: string;
    description: string;
    related: Submission[];
    image: string;
    video: string;

    constructor(name: string, title: string) {
        this.name = name;
        this.title = title;
    }
}
