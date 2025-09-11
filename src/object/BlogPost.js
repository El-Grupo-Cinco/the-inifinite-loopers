export class BlogPost {
  constructor(id, date, title, content, userId, imageSrc = "") {
    this.id = id;
    this.date = date;
    this.title = title;
    this.content = content;
    this.userId = userId;
    this.imageSrc = imageSrc;
  }
}
