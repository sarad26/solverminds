import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-mobile-techology',
  templateUrl: './mobile-techology.component.html',
  styleUrls: ['./mobile-techology.component.css']
})
export class MobileTechologyComponent implements OnInit {

  @Input() subjectChild: string;
  @Output() private numberGenarated1 = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public genareteNumber(){
    const randomnNumber = Math.random();
    this.numberGenarated1.emit(randomnNumber);

  }

}
