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

  addTodo(newtodoValue,newPriority:number)
  {
    var newTodo=
    {
      lebel:newtodoValue,
      done: false,
      priority:newPriority
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo)
  {
    this.todos= this.todos.filter(t=>t.lebel!==todo.lebel);
  }

  DoneTodo(todo)
  {
    if(this.todos.filter(t=>t.lebel==todo.lebel)){
      this.todos.push(todo.done=true);
    }
    
    
  }

}



