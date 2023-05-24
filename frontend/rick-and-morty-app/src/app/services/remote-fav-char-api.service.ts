import { Injectable } from '@angular/core';
import { RemoteApiService } from './remote-api.service';
import { FavCharApiService } from './fav-char-api.service';
import { FavCharacter } from '../models/FavCharacter';
import { Observable, map } from 'rxjs';
import { HttpResponse } from '@angular/common/http';


@Injectable()
export class RemoteFavCharApiService implements FavCharApiService{
  private favCharApiUrl = 'http://localhost:8081/api/';
  constructor(private remoteApi: RemoteApiService) {}

  public getFavChars(): Observable<FavCharacter[]>{
    return this.remoteApi.get<any>(`${this.favCharApiUrl}/favChars`).pipe(
      map((response) => {
          return response._embedded.favChars;
      })
  );
  }

  public getFavChar(id: number): Observable<FavCharacter>{
    return this.remoteApi.get<any>(`${this.favCharApiUrl}/favChars/${id}`);
  }

  public updateFavChar(id: number, favChar: FavCharacter): Observable<any>{
    return this.remoteApi.put(this.favCharApiUrl + `/favChars//${id}`, favChar);
  }

  public addFavChark(favChar: FavCharacter): Observable<FavCharacter>{
    return this.remoteApi.post<any>(`${this.favCharApiUrl}/favChars`, favChar);
  }

  public deleteFavChar(id: number): Observable<FavCharacter>{
    return this.remoteApi.delete<any>(`${this.favCharApiUrl}/favChars` + `/${id}`);
  }
}
