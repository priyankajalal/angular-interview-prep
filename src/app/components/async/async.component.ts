import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const promise = new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve("promise working async 1");
        resolve("promise working async 2");
      },2000)
    })
    promise.then(result=>console.log(result))

   const observable = new Observable(resolve=>{
    resolve.next(1)
    setTimeout(()=>{
      resolve.next(10)
      resolve.next(20)
      resolve.next(30)
    },1000)
   })
   this.test().then(response=>console.log(response));
   
  observable.subscribe(response=> {console.log("received from observable ",response)})
  }
  
  promiseFn(){
    const promise = new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve("promise working 1");
      },2000)
    })
    return promise
  }
  
  test(){
    return new Promise((resolve,b)=>{
      resolve("promise am working")
    })
  }

}
