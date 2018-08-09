import { Position } from './position';

export class Category {
    name: string;
    title: string;
    items: Position[];
    subcategories: Category[];

    constructor(name: string, title: string, items?: Position[], subcategories?: Category[]) {
        this.name = name;
        this.title = title;
        this.items = items || [];
        this.subcategories = subcategories || [];
    }
}
