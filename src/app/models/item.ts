export interface Item {
    id: string;
    name: string;
    title: string;
    description: string;
    related: Item[];
    image: string;
    thumbnail: string;
    video: string;
}
