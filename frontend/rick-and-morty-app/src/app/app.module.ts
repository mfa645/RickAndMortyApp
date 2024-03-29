import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharListComponent } from './char-list/char-list.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CharCardComponent } from './char-card/char-card.component';
import { CharApiService } from './services/char-api.service';
import { FavCharApiService } from './services/fav-char-api.service';
import { RemoteCharApiService } from './services/remote-char-api.service';
import { RemoteFavCharApiService } from './services/remote-fav-char-api.service';
import { RemoteApiService } from './services/remote-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CharDetailsComponent } from './char-details/char-details.component';
import { FavCharListComponent } from './fav-char-list/fav-char-list.component';
import { RemoteScrapperService } from './services/remote-scrapper.service';
import { ScrapperService } from './services/scrapper.service';
import { QuotesComponent } from './quotes/quotes.component';





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    CharListComponent,
    AutocompleteComponent,
    CharCardComponent,
    CharDetailsComponent,
    FavCharListComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    { provide: CharApiService, useClass: RemoteCharApiService },
    { provide: FavCharApiService, useClass: RemoteFavCharApiService },
    { provide: ScrapperService, useClass: RemoteScrapperService },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
