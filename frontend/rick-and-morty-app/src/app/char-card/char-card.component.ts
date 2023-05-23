import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Character } from '../models/Character';

@Component({
  selector: 'app-char-card',
  templateUrl: './char-card.component.html',
  styleUrls: ['./char-card.component.scss']
})
export class CharCardComponent {
  @Input() char!: Character;

ngOnInit(){
}
}
