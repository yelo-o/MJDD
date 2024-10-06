class Page {
  constructor(text) {
    this.text = text;
  }

  print() {
    console.log(this.text);
  }
}

class NoteBook {
  constructor() {
    this.pages = [];
  }
  addPage(text) {
    var page = new Page(text);
    this.pages.push(page);
  }

  print() {
    for (let page of this.pages) {
      page.print();
    }
  }
}

// Execution Logic
var mathNotes = new NoteBook();
mathNotes.addPage("기초 연산: + - * / ..."); 
mathNotes.addPage("삼각법 : sin cos tan ..."); 

mathNotes.print();
