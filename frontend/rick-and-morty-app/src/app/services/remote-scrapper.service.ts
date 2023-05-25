import { Injectable } from '@angular/core';
import { ScrapperService } from './scrapper.service';
import { RemoteApiService } from './remote-api.service';
import { Observable, map } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class RemoteScrapperService implements ScrapperService {
  private scrapperUrl = `http://localhost:8081/api/quotes`;
  constructor(private remoteApi: RemoteApiService) {}

  public getQuotes(): Observable<String[]> {
    return this.remoteApi.get<any>(`${this.scrapperUrl}/data`).pipe(
      map((response) => {
        return response.quotes;
      })
    );
  }
}
