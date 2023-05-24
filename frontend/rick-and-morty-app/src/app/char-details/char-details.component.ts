import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Character } from '../models/Character';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.scss']
})
export class CharDetailsComponent implements OnInit {
isFav : boolean = false;
  constructor(private snackBar:MatSnackBar, public dialogRef: MatDialogRef<CharDetailsComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Character) {}

  ngOnInit(): void {

  }
 close() {
    this.dialogRef.close();
  }

  addToFav(){
    if(!this.isFav){
      this.snackBar.open("Character added to favourites succesfully!", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
    });
    //LLAMADA API INTERNA PARA AÑADIRLO A FAVORITOS
    }
    else{
      this.snackBar.open("Character quitted from favourites.", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
    });
        //LLAMADA API INTERNA PARA QUITARLO DE FAVORITOS
  }
  this.isFav=!this.isFav;
}

}
