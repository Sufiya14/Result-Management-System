import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  SharedData:any={};
  url="http://localhost:3000/students";
  constructor(private http:HttpClient) { 
  }

  getList(){
    return this.http.get(this.url);
  }

  SaveStud(data:any){
    //console.warn("servie",data);
    return this.http.post(this.url,data)
    //return this.http.post(this.url.data);
  }

  deleteStud(id:number)
  {
    return this.http.delete(this.url+'/'+id)
  }

  getCurrentStud(id:number)
  {
    return this.http.get(this.url+'/'+id);
  
  }

  updateStud(id:number,data:any)
  {
    return this.http.put(this.url+'/'+id,data)
  }
}
