import { Component, OnInit } from '@angular/core';
import {SharedService} from './../shared.service';
@Component({
  selector: 'app-employee-list',
  template: `
   <h3 *ngIf="total==0">Shopping Cart is Empty</h3>
   <span *ngIf="total!=0">Total Price:&nbsp;{{total| currency:'INR'}}</span>
  `,
  styles: [
    `
    span{
      font-size:30px;
      color: midnightblue;
      font-weight: bold;
    }
    `
  ]
})
export class EmployeeListComponent implements OnInit {

  constructor(private shared:SharedService) { }
array=[];
total=0;
  ngOnInit(): void {
    this.array=this.shared.getArray();
    this.array.map(data=>{
      this.total=this.total+data;
    });
    
  }
  

}
