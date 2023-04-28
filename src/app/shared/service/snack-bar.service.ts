import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {


  constructor(private _snackBar: MatSnackBar) { }

  onOpenSnackbar(message : string){
    this._snackBar.open(message, "close",{
      duration:3000,
      horizontalPosition : 'left',
      verticalPosition : 'top'
    });
  }
}
