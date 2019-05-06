import { Component } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  todos:any[]=[
    {
      lebel:'Bring Milk',
      done:false,
      priority:3
    
    },
    {
      lebel:'Pay Mobile Bill',
      done:false,
      priority:1
    
    },
    {
      lebel:'clean house',
      done:true,
      priority:3
    
    },
    {
      lebel:'fix the bulb',
      done:false,
      priority:3
    
    }
  ];

  addTodo(newtodoValue)
  {
    var newTodo=
    {
      lebel:newtodoValue,
      done: false,
      priority:1
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo)
  {
    this.todos= this.todos.filter(t=>t.lebel!==todo.lebel);
  }
}



