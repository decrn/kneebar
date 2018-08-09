export abstract class Item {
    name: string;
    title: string;
    description: string;
    related: Item[];
    image: string;
    video: string;

    constructor(name: string, title: string) {
        this.name = name;
        this.title = title;
    }
}
