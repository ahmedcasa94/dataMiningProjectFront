import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import{HttpClient} from "@angular/common/http";
@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

getResult(a:string, b:string)  {
  this.http.get('URL' + a + b).subscribe(data => {
    // Read the result field from the JSON response.
     return data;

  });
}
}
