import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  likes: number;
  disLikes: number;

  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }


  constructor() {
    this.likes = 0;
    this.disLikes = 0;
  }
  voteUp(): boolean {
    this.likes += 1;
    return false;
  }

  voteDown(): boolean {
    this.disLikes += 1;
    return false;
  }

  ngOnInit() {
  }

}
