import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {ResultService} from '../result.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  alert:boolean=false
  updateStud=new FormGroup({
    rollno:new FormControl(''),
    name:new FormControl(''),
    dob:new FormControl(''),
    score:new FormControl('')
  })
  constructor(private router:ActivatedRoute,private result:ResultService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.result.getCurrentStud(Number(this.router.snapshot.params['id'])).subscribe((res:any)=>{
      console.log(res)
      this.updateStud=new FormGroup({
           rollno:new FormControl(res['rollno']),
           name:new FormControl(res['name']),
           dob:new FormControl(res['dob']),
           score:new FormControl(res['score'])
        })
    });

   
  }

  collection()
  {
    console.warn(this.updateStud.value);
    this.result.updateStud(Number(this.router.snapshot.params['id']),this.updateStud.value).subscribe((res1)=>{
      console.warn(res1)
      this.alert=true
    })
  }

  closeAlert(){
    this.alert=false
  }
}
