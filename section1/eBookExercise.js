/**
 * Ebook Exercise
 * 1. Create a class named Book with a constructor that initializes a title,
 * author, and year properties. The title and author should be strings and the
 * year should be a number
 *
 * 2. Create a subclass named Ebook that extends Book.
 *
 * 3. The Ebook class should have an additional property fileSize which is a
 * number and a method download() that returns a string with the title of the
 * ebook and its fileSize.
 */

class Book {
  constructor(title, author, year) {
    if (typeof title !== 'string' || title.trim() === '') {
      throw new Error('Title must be a non-empty string.');
    }
    if (typeof author !== 'string' || author.trim() === '') {
      throw new Error('Author must be a non-empty string.');
    }
    if (typeof year !== 'number') {
      throw new Error('Year must be a number.');
    }

    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    if (typeof fileSize !== 'number' && fileSize <= 0) {
      throw new Error('File size must be a number');
    }
    super(title, author, year);
    this.fileSize = fileSize;
  }
  download() {
    return `Title - ${this.title}; File Size - ${this.fileSize}`;
  }
}
