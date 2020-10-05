import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You Selected Department With ID : {{departmentID}}</h3>
    <button type="button" (click)="onPrev()" class="btn btn-warning">Previous</button>&nbsp;
<button type="button" (click)="onNext()" class="btn btn-info">Next</button><br>
<button (click)="goDepartment()" class="btn btn-success">Back</button>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
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

}
