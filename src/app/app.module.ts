import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ShowdataComponent } from './showdata/showdata.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    ListStudentComponent,
    SearchComponent,
    HomeComponent,
    ShowdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
