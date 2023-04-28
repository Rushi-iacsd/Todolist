import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
  }

  onTodoAdd(item: HTMLInputElement){
    let val = item.value;
    console.log(val)
   if(val.length > 0){
    this._todoService.addtodoItem(val)
   }
    item.value = ''
  }
}
