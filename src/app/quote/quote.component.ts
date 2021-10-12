import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 
      'Ian Wanjira', 
      'Dalai Lama', 
      'The purpose of our lives is to be happy.', 
      new Date(2020, 9, 10)),
    new Quote(2, 
      'Peter Griffin', 
      'Steve Jobs', 
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.", 
      new Date(2020, 9, 10)),
    new Quote(3, 
      'Sherlock Holmes', 
      'Henry Ford', 
      'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.', 
      new Date(2020, 9, 10)),
  ];


  addNewQuote(quote: any) {
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.dateCreated = new Date();
    this.quotes.push(quote);

  }
  deleteQuote(isComplete: boolean, index: number) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toogleDetails(index: number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete: boolean, index:number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
