import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseLoggerService {

  constructor() { }
  log(message){
    console.log('i log in console: ',message);
  }
}
