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
  isFavourite! : boolean ;
  constructor(private dialog: MatDialog){ }
ngOnInit(){
}

onCharSelect(){
  const dialogRef = this.dialog.open(CharDetailsComponent, {
    data:{ char : this.char ,isFavourite: false }
  });
}
}
