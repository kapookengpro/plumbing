import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = environment.API_URL;
  // API_URL  =  'http://localhost:4200/assets/json/marker.json';
  // API_URL  =  'http://171.100.63.42:8012/assets/json/marker.json';

  constructor(private  httpClient:  HttpClient) {}


  getContacts(){
    return  this.httpClient.get(this.API_URL);
  } 

}
