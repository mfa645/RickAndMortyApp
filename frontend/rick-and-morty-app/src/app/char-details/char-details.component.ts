import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Character } from '../models/Character';
@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.scss']
})
export class CharDetailsComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<CharDetailsComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: Character) {}

  ngOnInit(): void {

  }
 close() {
    this.dialogRef.close();
  }
}
