import { Injectable } from '@angular/core';
import { ScrapperService } from './scrapper.service';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { RemoteApiService } from './remote-api.service';


@Injectable()
export class RemoteScrapperService implements ScrapperService{
  private scrapperUrl = `${environment.apiBaseUrl}/bot`;
  constructor(private remoteApi: RemoteApiService) {}

  public getQuotes(): Observable<string[]> {
    return this.remoteApi.get<string[]>(`${this.scrapperUrl}/data`);
}
}
