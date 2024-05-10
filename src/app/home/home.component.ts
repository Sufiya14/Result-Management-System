import { Component, OnInit } from '@angular/core';
import {ResultService} from '../result.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public res:ResultService) { }

  ngOnInit(): void {
  }

}
