import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {ResultService} from '../result.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  alert:boolean=false
  addStud=new FormGroup({
    rollno:new FormControl(''),
    name:new FormControl(''),
    dob:new FormControl(''),
    score:new FormControl('')
  })

  constructor(private st:ResultService) { }

  ngOnInit(): void {
  }

  CollectStud()
  {
    this.st.SaveStud(this.addStud.value).subscribe((res1)=>{
      //console.warn("result is here.",res1)
      this.alert=true;
      this.addStud.reset({})
    })
    
    // console.warn(this.addStud.value)
  }
  closeAlert()
  {
    this.alert=false
  }
}
