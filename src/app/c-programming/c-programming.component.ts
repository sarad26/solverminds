import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-c-programming',
  templateUrl: './c-programming.component.html',
  styleUrls: ['./c-programming.component.css']
})
export class CProgrammingComponent implements OnInit {

 
  rowData : any;
  valuesList : any;

  constructor( 
    private userService: UserService,
    private http: HttpClient,
    ) { }

  ngOnInit() {


  
          this.userService.getAll().subscribe(myData => {
            this.rowData = myData;
                //console.log('first'+this.rowData);


                // this.rowData.articles.forEach(function (values) {
                //   let valuesList  = values;
                //   // let author = values.author
                //   // var result = Object.keys(valuesList).map((key) => [Number(key), valuesList[key]]);
                //   // console.log(result);

              // });
          });
        }
}