export class BlogPost {
    constructor ( id, title, content, picture, authorId) {
        this.id = id;
        this.content = content;
        this.picture = picture;
        this.authorId = authorId;
    }
}