import { Injectable } from '@angular/core';
import { CharApiService } from './char-api.service';
import { RemoteApiService } from './remote-api.service';
import { Observable, map } from 'rxjs';
import { Character } from '../models/Character';
import { HttpResponse } from '@angular/common/http';


@Injectable()
export class RemoteCharApiService implements CharApiService {
  private rickymortiUrl = 'https://rickandmortyapi.com/api/character';
  constructor(private remoteApi: RemoteApiService) {}

  getChar(): Observable<Character> {
    return this.remoteApi.get<any>(`${this.rickymortiUrl}/1`);
  }


  getCharacters(pags : number): Observable<Character[]> {
    return this.remoteApi.get<any>(`${this.rickymortiUrl}/?page=${pags}`).pipe(
      map((response) => {
        return response['results'];
      })
    );
  }

  getCharactersByName(pags:number, name : string): Observable<Character[]> {
    return this.remoteApi.get<any>(`${this.rickymortiUrl}/?page=${{pags}}&name=${name}`).pipe(
      map((response) => {
        return response['results'];
      })
    );
  }
  getQueryInfo(name : String) : Observable<String>{
    return this.remoteApi.get<any>(`${this.rickymortiUrl}/?name=${name}`).pipe(
      map((response) => {
        return response.info.count != undefined? response.info.count : "826";
      })
    );
  }
}
