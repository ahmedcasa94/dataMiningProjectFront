import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import{HttpClient,HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
  countries;
  equipeHote;
  equipeInv;
  result;

  constructor(private http: HttpClient, private service: ServiceService) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/all?fields=name;alpha2Code').subscribe(data => {
      // Read the result field from the JSON response.
      this.countries = data;
      console.log(this.countries);
    });
  }

  onClickValidate(): void {
    let Params = new HttpParams();
    Params.append('HC', 'this.equipeHote');
    Params.append('AC', 'this.equipeInv');
    console.log(this.equipeHote.name + " "+ this.equipeInv.name);

    this.http.get('http://localhost:5000/result?HT='+this.equipeHote.name+'&AT='+this.equipeInv.name).subscribe(data =>
      {
        this.result =data;
      });
  }


}
