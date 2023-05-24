import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FavCharApiService } from '../services/fav-char-api.service';
import { FavCharacter } from '../models/FavCharacter';
import { CharCardComponent } from '../char-card/char-card.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fav-char-list',
  templateUrl: './fav-char-list.component.html',
  styleUrls: ['./fav-char-list.component.scss']
})
export class FavCharListComponent {
  autocompleteControl = new FormControl('');
  page : number = 0;
  favChars!: FavCharacter[];
  filteredChars!: FavCharacter[];
  queryCount!:number;
  filterProperty:string = "name";

  constructor(private favCharApi: FavCharApiService) {}
  ngOnInit() {
    this.favCharApi.getFavChars().subscribe((response)=>{
      this.favChars = response;
    });
  }

  cutString(value: string): string {
    if (value.length > 12) {
      return value.slice(0, 12) + '...';
    }
    return value;
  }
  getFiltered(filtered: FavCharacter[]) {
    this.filteredChars = filtered;
  }

}
