import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
import {SharedService} from './../shared.service';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>Available Items</h3>
    
    <div *ngIf="departmentID==1"><div *ngFor="let i of list1"><h4>{{i.name}}--Rs.{{i.price}}</h4>&nbsp;<button type="button" (click)="addPrice(i.price)" class="btn btn-dark btn-sm">Add Item</button></div></div>
    <div *ngIf="departmentID==2"><div *ngFor="let i of list2"><h4>{{i.name}}--Rs.{{i.price}}</h4>&nbsp;<button type="button" (click)="addPrice(i.price)" class="btn btn-dark btn-sm">Add Item</button></div></div>
    <div *ngIf="departmentID==3"><div *ngFor="let i of list3"><h4>{{i.name}}--Rs.{{i.price}}</h4>&nbsp;<button type="button" (click)="addPrice(i.price)" class="btn btn-dark btn-sm">Add Item</button></div></div>
    <div *ngIf="departmentID==4"><div *ngFor="let i of list4"><h4>{{i.name}}--Rs.{{i.price}}</h4>&nbsp;<button type="button" (click)="addPrice(i.price)" class="btn btn-dark btn-sm">Add Item</button></div></div>
    <div *ngIf="departmentID==5"><div *ngFor="let i of list5"><h4>{{i.name}}--Rs.{{i.price}}</h4>&nbsp;<button type="button" (click)="addPrice(i.price)" class="btn btn-dark btn-sm">Add Item</button></div></div>
    <button type="button" (click)="onPrev()" class="btn btn-warning">Previous</button>&nbsp;
<button type="button" (click)="onNext()" class="btn btn-info">Next</button><br>
<button (click)="goDepartment()" class="btn btn-success">Back</button>
  `,
  styles: [
    `
    div{
      margin-bottom:30px;
      
    }
    h3{
      color:red;
    }
    .btn{
      margin-top:20px;
    }
    `
  ]
})
export class DepartmentDetailComponent implements OnInit {
list1=[
  {"name":"Choclate Cake","price":500},
  {"name":"Vanilla Cake","price":400}
];
list2=[
  {"name":"Choclate Ice Cream","price":50},
  {"name":"Vanilla Ice Cream","price":40}
];
list3=[
  {"name":"Choclate Cupcake","price":200},
  {"name":"Vanilla Cupcake","price":100}
];
list4=[
  {"name":"Chicken Sandwich","price":80},
  {"name":"Veg Sandwich","price":60}
];
list5=[
  {"name":"American-Style Pancakes","price":300},
  {"name":"Scotch Pancakes","price":200}
];
  constructor(private route:ActivatedRoute,private router:Router,private shared:SharedService) { }
 public departmentID;

  ngOnInit(){
    //let id=parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentID=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.departmentID=id;
    })
  }

  onPrev(){
    let prev=this.departmentID-1;
    if(prev>=1&&prev<=5){
    this.router.navigate(['/departments',prev]);
    }
    else{
      this.router.navigate(["**"]);
    }
  }
  onNext(){
    let prev=this.departmentID+1;
    if(prev>=1&&prev<=5){
      this.router.navigate(['/departments',prev]);
      }
      else{
        this.router.navigate(["**"]);
      }
  }
  goDepartment(){
  let selectedId=this.departmentID?this.departmentID:null;
  this.router.navigate(['/departments',{id:selectedId}])
  }
  addPrice(price){
    this.shared.changeMessage2(price);
  }

}
