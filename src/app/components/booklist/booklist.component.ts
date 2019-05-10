import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../model/book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  star:string;
  id:number;
  name:string="Md khokanuzzaman khokan";
  mystar:any[]=[
    {
      'star':'*',
      id:1
    },
    {
      'star':'*',
      id:2
    },
  ]

  books:Book[]=
  [
    
  {
    id:1,
    title:'Test1',
    author:'Khokan',
    rating:0,
    price:2,
    numberRating:0
},
  {
    id:2,
    title:'Test2',
    author:'Khokan',
    rating:0,
    price:2,
    numberRating:0
},
  {
    id:3,
    title:'Test3',
    author:'Khokan',
    rating:0,
    price:2,
    numberRating:0
},
  {
    id:4,
    title:'test4',
    author:'Khokan',
    rating:0,
    price:2,
    numberRating:0
},
  {
    id:5,
    title:'test5',
    author:'khokan',
    rating:0,
    price:2,
    numberRating:0
},

  ];


  constructor() { }

  rate(book: Book, userRating:number)
  {
    book.rating=(book.rating*book.numberRating+userRating)/(book.numberRating+1);
    book.numberRating++;

  }

  ngOnInit() {
  }

}
