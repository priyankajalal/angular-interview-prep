import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { BaseLoggerService } from '../../services/base-logger.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards=[];
  tickerTechincals=[];
  constructor(private cardService:CardService,private logger:BaseLoggerService) { }

  ngOnInit() {
  }
  handleGetCards(){
    let n:number = 10;
    this.logger.log("msg 1")
    this.cards=this.cardService.getCards()
    this.cardService.getSymbolTechnical("AAPL").subscribe((response:any)=>
    this.tickerTechincals=response)
  }

}
