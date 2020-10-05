import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department Lists</h3>
    <ul class="items">
  <li (click)="onSelect(i)" [class.selected]="isSelected(i)" *ngFor="let i of dept">
  <button type="button" class="btn btn-outline-secondary">{{i.id}}--{{i.name}}</button>
  </li>
    </ul>
    
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
public selectedId;
  dept=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"Javascript"},
    {"id":3,"name":"BootStrap"},
    {"id":4,"name":"CSS3"},
    {"id":5,"name":"HTML5"},
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
