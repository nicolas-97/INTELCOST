import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PixabayServiceService {

  url:string = "https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25";

  constructor(private http: HttpClient) {}

  get(): Observable<any>{
    return this.http.get(this.url);
  }

  getCategory(category): Observable<any>{
    return this.http.get(this.url+'&category='+category);
  }

  getSearch(word): Observable<any>{
    return this.http.get(this.url+'&q='+word);
  }

}
