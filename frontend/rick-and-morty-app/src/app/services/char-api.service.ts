import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export abstract class CharApiService {
  public abstract getChars(): Observable<Character[]>;
}
