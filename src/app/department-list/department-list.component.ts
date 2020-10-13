import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <h3>Item Lists</h3>
    <ul class="items">
  <li (click)="onSelect(i)" [class.selected]="isSelected(i)" *ngFor="let i of dept">
  <button type="button" class="btn btn-outline-secondary">{{i.emo}}--{{i.name}}</button>
  </li>
    </ul>
    
  `,
  styles: [
    `ul {
      list-style-type: none;
    }
    button{
      margin-bottom:50px;
    }
    `
  ]
})
export class DepartmentListComponent implements OnInit {
public selectedId;
  dept=[
    {"id":1,"emo":'🎂',"name":"Birthday Cake"},
    {"id":2,"emo":'🍨',"name":"Ice Cream"},
    {"id":3,"emo":'🧁',"name":"Cupcakes"},
    {"id":4,"emo":'🥪',"name":"Sandwich"},
    {"id":5,"emo":'🥞',"name":"Pancakes"},
  ]
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){
    //let id=parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentID=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.selectedId=id;
    })
  }
  onSelect(department){
 this.router.navigate(['/departments',department.id]);
  }
 
  isSelected(department){
    return department.id===this.selectedId;
  }
}
