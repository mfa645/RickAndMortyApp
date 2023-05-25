import { Component, OnInit, Inject } from '@angular/core';
import { ScrapperService } from '../services/scrapper.service';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
quotes! : String[];
quote :String= "";
constructor(private quoteService : ScrapperService){}


ngOnInit(){
this.quoteService.getQuotes().subscribe((response)=>{
  this.quotes = response;
})
console.log(this.quotes);
}

onGenerateQuote(){
  this.quote=this.quotes[Math.floor(Math.random() * this.quotes.length)]
}

}
