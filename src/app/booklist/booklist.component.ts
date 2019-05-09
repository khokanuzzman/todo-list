import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
 
 
  book:Book=
  {
      title:'khokan',
      author:'hello',
      rating:1,
      price:2
  };


  constructor() { }

 

  ngOnInit() {
  }

}
