import { CartHomePageComponent } from './cart-home-page/cart-home-page.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:CartHomePageComponent
    },
  {
path:'departments',
component:DepartmentListComponent
},
{
  path:'departments/:id',
  component:DepartmentDetailComponent
  },
{
path:'employees',
component:EmployeeListComponent
},
{
  path:"**",
  component:PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenets=[DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent,DepartmentDetailComponent]
