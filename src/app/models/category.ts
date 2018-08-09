import { Position } from './position';

export class Category {
    name: string;
    title: string;
    items: Position[];

    constructor(name: string, title: string, items: Position[]) {
        this.name = name;
        this.title = title;
        this.items = items;
    }
}
