import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Character } from '../models/Character';
import { MatDialog } from '@angular/material/dialog';
import { CharDetailsComponent } from '../char-details/char-details.component';

@Component({
  selector: 'app-char-card',
  templateUrl: './char-card.component.html',
  styleUrls: ['./char-card.component.scss']
})
export class CharCardComponent {
  @Input() char!: Character;

  constructor(private dialog: MatDialog){ }
ngOnInit(){
}

onCharSelect(){
  const dialogRef = this.dialog.open(CharDetailsComponent, {
    data: this.char
  });

  // dialogRef.afterClosed().subscribe((deck) => {
  //   this.selectedDeck = deck;

  //   if (this.selectedDeck){
  //     this.gameService.startGame(this.selectedGameMode!, this.selectedDeck);
  //   }
  // }); PARA COMPROBAR MODIFICACIONES CON FAVORITOS

}
}
