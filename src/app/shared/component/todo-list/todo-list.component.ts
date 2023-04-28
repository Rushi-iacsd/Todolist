import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoItems : Array<string> = []
  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
    console.log(this._todoService.getAllTodos())
    this.todoItems = this._todoService.getAllTodos()  
  }

}
