import { Injectable } from '@angular/core';
import { BaseLoggerService } from './base-logger.service';

@Injectable()
export class HttpLoggerService  extends BaseLoggerService{

  constructor() {
    super()
   }
  log(message){
    console.log('i log in to databse via http call: ',message);
  }
}
