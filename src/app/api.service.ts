import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  API_URL  =  'http://localhost:4200/assets/json/marker.json';

  constructor(private  httpClient:  HttpClient) {}


  getContacts(){
    return  this.httpClient.get(this.API_URL);
  } 

}
