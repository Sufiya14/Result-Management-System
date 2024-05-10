import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ResultService} from '../result.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchStud=new FormGroup({
    rollno:new FormControl(''),
    name:new FormControl(''),
  })
  collection:any=[];

  constructor(private router:ActivatedRoute,private result:ResultService,private rt :Router) {
    
    this.result.getList().subscribe((data:any)=>{
      this.collection=data;
    })
   }

  ngOnInit(): void {
    
  }

  search()
  {
     const res=this.SearchStud.value;
      for( let item of this.collection){
        if (item.rollno == res.rollno){
          this.result.SharedData=item;
          break;
        }
      }
      console.warn("result is here.",this.result.SharedData)
      this.SearchStud.reset({});  
      this.rt.navigate(['/showdata'])
  }
}
