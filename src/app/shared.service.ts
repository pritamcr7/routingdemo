import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  array=[];
  private messageSource2 = new BehaviorSubject(10);
  currentMessage2 = this.messageSource2.asObservable();
  changeMessage2(message: number) {
    this.messageSource2.next(message);
    this.array.push(this.messageSource2.value);
    
  }
  getArray(){
    
    return this.array;
  }
}
