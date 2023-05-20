import { Observable } from 'rxjs';

export abstract class ScrapperService {
    public abstract getQuotes(): Observable<string[]>;
}
