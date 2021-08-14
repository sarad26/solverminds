import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll() {        
        return this.http.get(`https://newsapi.org/v2/everything?q=tesla&from=2021-07-14&sortBy=publishedAt&apiKey=cb362300f4954815bfda23fbdc69092a`);
        //console.log('hai');
      }
    // AgGrid
    // getDatafilter(data) {
    //     return this.http.get<any>(`${report.apiUrl}/report/?from_date=`+data.myfrmdate+`&end_date=`+data.mytoval);
    // }
    // getDatacurrent(){
    //     return this.http.get<any>(`${report.apiUrl}/report/`);        
    // }

    // getPdf(){
    //     return this.http.get<any>(`${report.apiUrl}/pdf/`);        
    // }
}

