import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() parentData:Book;

  constructor() { }
  ngOnInit() {
  }

  anotherRate(book: Book, userRating:number)
  {
    book.rating=(book.rating*book.numberRating+userRating)/(book.numberRating+1);
    book.numberRating++;

  }

}
