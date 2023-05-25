import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Character } from '../models/Character';
import { FavCharacter } from '../models/FavCharacter';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RemoteFavCharApiService } from '../services/remote-fav-char-api.service';
import { FavCharApiService } from '../services/fav-char-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.scss'],
})
export class CharDetailsComponent implements OnInit {
  isFav: boolean = false;
  wasFav!: number;
  favChar!: FavCharacter;
  requestFailed: boolean = false;
  error: string = "ERROR : Comments name can't be over 50 characters.";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private favCharApi: FavCharApiService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CharDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { char: Character }
  ) {}

  ngOnInit(): void {
    if ('comments' in this.data.char) {
      this.favChar = this.data.char as FavCharacter;
      this.wasFav! = this.favChar.id;
      this.isFav = true;
      console.log("wasfav = true");
    } else {
      this.favCharApi.getFavChars().subscribe((response) => {
        const found = response.find((char) => {
          return char.name == this.data.char.name;
        });
        if (found) {
          this.wasFav = found.id;
          this.isFav = true;
          console.log("wasfav = true");
        }
      });
    }
  }

  close() {
    if(this.favChar){
      if (!this.isFav) {
        console.log('char deleted with id' + this.favChar.id);
        this.favCharApi.deleteFavChar(this.favChar.id).subscribe({
          next: () => {
            this.router.navigate([`/favChars`]);
        },
          error: () => {},
        });
      }
      else{
        console.log('char updated');
        this.favCharApi.updateFavChar(this.favChar.id, this.favChar).subscribe({
          error: () => {},
        });
        this.snackBar.open('Comments updated.', '', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      }
    }

    else{
      if (!this.wasFav && !this.isFav) {
        console.log('nothing happened');
        this.dialogRef.close();
      }
      else if (!this.wasFav && this.isFav) {
        console.log('char added');
        this.favCharApi.addFavChar(this.data.char).subscribe({
          error: () => {},
        });
      }
    else if (this.wasFav && !this.isFav) {
      console.log('char deleted with id' + this.wasFav);
      this.favCharApi.deleteFavChar(this.wasFav).subscribe({
        next: () => {
          this.router.navigate([`/favChars`]);
      },
        error: () => {},
      });
    }
    else{
        console.log('nothing happened');
        this.dialogRef.close();
      }
    }
    this.dialogRef.close();
  }

  addToFav() {
    if (!this.isFav) {
      this.snackBar.open('Character added to favourites succesfully!', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    } else {
      this.snackBar.open('Character quitted from favourites.', '', {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }
    this.isFav = !this.isFav;
  }
}
