import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ResultService} from '../result.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  data:any;
  constructor(private result:ResultService,private r:Router) { 
    this.data=this.result.SharedData;
    console.warn(this.data)
  }

  ngOnInit(): void {
  }

  logout(){
    this.r.navigate(['/'])
  }
}
