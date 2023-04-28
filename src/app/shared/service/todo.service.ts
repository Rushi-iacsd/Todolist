import { Injectable } from '@angular/core';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   
   // we make a API Call to get data.

  todoList: Array<string> = ["html","css","bootstrap","js"]
  constructor(private _snackbarService : SnackBarService) { }



getAllTodos() : Array<string>{
 return this.todoList
}


addtodoItem(todo:string){
  // to api call item in db
  this.todoList.push(todo)
  //alert(`${todo} is added successfully`)
  this._snackbarService.onOpenSnackbar (`${todo} is added in list`)
}


removeItem(){
     
  alert('Item is removed successfully')
}



}

