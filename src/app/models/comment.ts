import { User } from './user';

export class Comment {
    author: User;
    comment: string;
    date: Date;

    constructor(author: User, comment: string, date?: Date) {
        this.author = author;
        this.comment = comment;
        this.date = date;
    }
}
