import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Character } from '../models/Character';
import {FavCharacter} from '../models/FavCharacter';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RemoteFavCharApiService } from '../services/remote-fav-char-api.service';
import { FavCharApiService } from '../services/fav-char-api.service';
@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.scss']
})
export class CharDetailsComponent implements OnInit {
isFav : boolean = false;
favChar! : FavCharacter;
  constructor(
    private favCharApi:FavCharApiService,
    private snackBar:MatSnackBar,
    public dialogRef: MatDialogRef<CharDetailsComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: {char:Character}
    ) {}

  ngOnInit(): void {
    if('comments' in this.data ){
      this.favChar = this.data.char as FavCharacter;
    }
  }
 close() {
    if(this.favChar && !this.isFav){
    this.favCharApi.deleteFavChar(this.favChar.id);
    }
    else if(!this.favChar && this.isFav){
    this.favCharApi.addFavChar(this.data.char);
    }
    else{
      this.favCharApi.updateFavChar(this.favChar.id, this.favChar);
    }
    this.dialogRef.close();
  }

  addToFav(){
    if(!this.isFav){
      this.snackBar.open("Character added to favourites succesfully!", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
    });
    }
    else{
      this.snackBar.open("Character quitted from favourites.", '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
    });
  }
  this.isFav=!this.isFav;
}

}
