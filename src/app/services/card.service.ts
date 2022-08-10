import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class CardService {

  constructor(private http: HttpClient) { }

  getCards(){
    return ["card1","card2"]
  }
  getSymbolTechnical(symbol){
    return this.http.get(`https://simplevisor.com/api/symbol/model/${symbol}`)
  }
}
