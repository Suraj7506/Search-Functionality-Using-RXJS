import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Search } from './app.component';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(
    private http : HttpClient
  ) { 



  }

url= "http://localhost:3000/Users";
  getSearches(): Observable<Search[]>{
    return this.http.get<Search[]>(this.url)
  }
    
  

  
}
