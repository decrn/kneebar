import { Position } from './position';

export class Category {
    name: string;
    title: string;
    items: Position[];
    subcategories: Category[];
    thumbnail: string;

    constructor(name: string, title: string, thumbnail: string, items?: Position[], subcategories?: Category[]) {
        this.name = name;
        this.title = title;
        this.thumbnail = thumbnail;
        this.items = items || [];
        this.subcategories = subcategories || [];
    }
}
