import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {ListStudentComponent} from './list-student/list-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import {SearchComponent} from './search/search.component';
import {HomeComponent} from './home/home.component';
import {ShowdataComponent} from './showdata/showdata.component';

const routes: Routes = [
  {
    component:AddStudentComponent,
    path:'add'
  },
  {
    component:ListStudentComponent,
    path:'list'
  },
  {
    component:UpdateStudentComponent,
    path:'update/:id'
  },
  {
    component:SearchComponent,
    path:'search'
  },
  {
    component:ShowdataComponent,
    path:'showdata'
  },
  {
    component:HomeComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
