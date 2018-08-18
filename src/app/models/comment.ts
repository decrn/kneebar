export class Comment {
    author: string;
    comment: string;
    date: Date;

    constructor(author: string, comment: string, date?: Date) {
        this.author = author;
        this.comment = comment;
        this.date = date;
    }
}
