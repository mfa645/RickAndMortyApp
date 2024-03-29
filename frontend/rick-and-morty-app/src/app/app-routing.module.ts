import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { CharListComponent } from './char-list/char-list.component';
import { FavCharListComponent } from './fav-char-list/fav-char-list.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuContentComponent },
  { path: 'chars', component: CharListComponent },
  { path: 'favChars', component: FavCharListComponent },
  { path: 'quotes', component: QuotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
