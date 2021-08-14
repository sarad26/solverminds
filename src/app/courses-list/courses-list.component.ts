import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  columnDefs = [
    { field: 'make',sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
];

  // rowData = [
  //     { make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];
 
  rowData: Observable<any[]>;
  data : any;

  constructor( 
    private http: HttpClient,
    ) { }

    ngOnInit(): void {
      this.rowData = this.http.get<any[]>(`https://www.ag-grid.com/example-assets/row-data.json`);
      console.log(this.rowData );
  }

    // applyFilter() {
    //   this.userService.getAll().subscribe(myData => {
    //     this.rowData = myData;
    //         console.log('API');
    //   });
    // }

}
