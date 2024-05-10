import { Component, OnInit } from '@angular/core';
import {ResultService} from '../result.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  collection:any=[];
  constructor(private result:ResultService, private r:Router) {
    this.result.getList().subscribe((data:any)=>{
      this.collection=data;
      console.warn(data);
    })
   }
  
  ngOnInit(): void {
  }

  deleteStud(item:any)
  {
    this.collection.splice(item-1,1)
    this.result.deleteStud(Number(item)).subscribe((res1)=>{
      console.warn("result",res1)
    })
  }

  logout(){
    this.r.navigate(['/'])
  }
}
