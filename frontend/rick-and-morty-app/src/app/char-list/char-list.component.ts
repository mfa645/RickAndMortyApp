import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CharApiService } from '../services/char-api.service';
import { Character } from '../models/Character';
import { CharCardComponent } from '../char-card/char-card.component';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.scss']
})
export class CharListComponent {
  autocompleteControl = new FormControl('');
  page : number = 0;
  chars!: Character[];
  filteredChars!: Character[];
  isLoading: boolean = false;
  queryCount!:number;
  filterProperty:string = "name";


  constructor(private charApi: CharApiService) {}
  ngOnInit() {
    this.charApi.getQueryInfo("").subscribe((result:String)=>{
      this.queryCount = Number(result);
    });

    this.charApi.getCharacters(0).subscribe((response)=>{
      this.chars = response;
    });
  }

  onPageChange(page:number) {
    this.charApi.getCharacters(page).subscribe((response)=>{
      this.chars = response;
    });
  }

  cutString(value: string): string {
    if (value.length > 12) {
      return value.slice(0, 12) + '...';
    }
    return value;
  }
  getFiltered(filtered: Character[]) {
    this.filteredChars = filtered;
  }
}
