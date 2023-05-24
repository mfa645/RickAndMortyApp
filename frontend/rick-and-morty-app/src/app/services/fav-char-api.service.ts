import { Observable } from 'rxjs';
import { FavCharacter } from '../models/FavCharacter';

export abstract class FavCharApiService {
  public abstract getFavChars(): Observable<FavCharacter[]>;

  public abstract getFavChar(id: number): Observable<FavCharacter>;

  public abstract updateFavChar(id: number, favChar: FavCharacter): Observable<any>;

  public abstract addFavChark(favChar: FavCharacter): Observable<FavCharacter>;

  public abstract deleteFavChar(id: number): Observable<FavCharacter>;
}
