import { Injectable } from '@angular/core';
import { CharApiService } from './char-api.service';
import { RemoteApiService } from './remote-api.service';
import { Observable, map } from 'rxjs';
import { Character } from '../models/Character';

@Injectable()
export class RemoteCharApiService implements CharApiService {
  private rickymortiUrl = 'https://rickandmortyapi.com/api/character';
  constructor(private remoteApi: RemoteApiService) { }

  getChars(): Observable<Character[]> {
    return this.remoteApi.get<any>(`${this.rickymortiUrl}`).pipe(
      map((response) => {
          return response['results'].map(
            (character:Character[])=> ({
              id: character[0],
              name: character[1],
              status: character[2],
              species: character[3],
              gender: character[5],
              origin: character[6].name
            })
          );
      })
  );  }
}
