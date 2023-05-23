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
import { RemoteCharApiService } from './services/remote-char-api.service';
import { RemoteApiService } from './services/remote-api.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    CharListComponent,
    AutocompleteComponent,
    CharCardComponent
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
    NgxPaginationModule
  ],
  providers: [
    { provide: CharApiService, useClass: RemoteCharApiService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
