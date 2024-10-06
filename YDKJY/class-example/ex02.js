class Publication {
  constructor(title, author, pubDate) {
    this.title = title;
    this.author = author;
    this.pubDate = pubDate;
  }

  print() {
    console.log(`
      제목 : ${this.title}
      저자 : ${this.author}
      출판일 : ${this.pubDate}
      `);
  }
}

class Book extends Publication {
  constructor(bookDetails) {
    super(
      bookDetails.title,
      bookDetails.author,
      bookDetails.publishedOn,
    )
    this.publisher = bookDetails.publisher;
    this.ISBN = bookDetails.ISBN;
  }

  print() {
    super.print();
    console.log(`
      출판사 : ${this.publisher},
      ISBN : ${this.ISBN}
    `);
  }
}

class BlogPost extends Publication {
  constructor(title, author, pubDate, URL) {
    super(title, author, pubDate);
    this.URL = URL;
  }
  print() {
    super.print();
    console.log(`URL : ${this.URL}`);
  }
}

// Execute Logic
var YDKJY = new Book({
  title: "You Don't know JavaScript yet",
  author: "yelo",
  publishedOn: "2024년 10월 5일",
  publisher: "yelosta",
  ISBN: "979-8620412312"
})
YDKJY.print();
