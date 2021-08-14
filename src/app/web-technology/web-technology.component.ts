import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-web-technology',
  templateUrl: './web-technology.component.html',
  styleUrls: ['./web-technology.component.css']
})
export class WebTechnologyComponent implements OnInit {

  subjectParent : object = [
    { id: 1, name: '- laptop'},
    { id: 2, name: '- tablets'},
    { id: 3, name: '- netbook'},
    { id: 4, name: '- smartphones'},
    { id: 5, name: '- global positioning system'}
  ]

  rowData: any;
  data : any;
  articles: any;
  randomnNumberhtml : number;

  constructor( 
    private userService: UserService,
    private http: HttpClient,
    ) { }

  ngOnInit() {
  }

  // applyFilter() {
  //     this.userService.getAll().subscribe(myData => {
  //       this.rowData.articles = myData;
  //           console.log(this.rowData.articles);

  //         //   this.rowData.articles.forEach(function (values) {
  //         //     this.valuesList  = values;
  //         //     console.log(values.author);

  //         // });
  //     });
  public onNumberGenarated(randomnNumber : number){
    this.randomnNumberhtml = randomnNumber;

}
    }

   


