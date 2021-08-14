import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebTechnologyComponent } from './web-technology/web-technology.component';
import { CProgrammingComponent } from './c-programming/c-programming.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { MobileTechologyComponent } from './web-technology/mobile-techology/mobile-techology.component';

@NgModule({
  declarations: [
    AppComponent,
    WebTechnologyComponent,
    CProgrammingComponent,
    CoursesListComponent,
    HomeComponent,
    MobileTechologyComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    //AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
