import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CProgrammingComponent} from '././c-programming/c-programming.component';
import { HomeComponent } from './home/home.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import {WebTechnologyComponent } from './web-technology/web-technology.component';


const routes: Routes = [

  {path: 'c-programming', component: CProgrammingComponent},
  {path: '', component:HomeComponent },
  {path: 'courses-list', component: CoursesListComponent},
  {path: 'web-technology', component: WebTechnologyComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
