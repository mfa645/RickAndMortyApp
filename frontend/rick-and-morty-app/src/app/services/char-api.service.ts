import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export abstract class CharApiService {
  public abstract getCharacters(pag : number): Observable<Character[]>;
  public abstract getCharactersByName(pag:number, name : string): Observable<Character[]>;
  public abstract getChar(): Observable<Character>;
  public abstract getQueryInfo(name:string): Observable<String>;


}
