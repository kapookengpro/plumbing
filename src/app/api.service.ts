import { Injectable } from '@angular/core';
import { HttpParams,HttpClient} from  '@angular/common/http';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private  httpClient:  HttpClient) {}


  getContacts(){
    return  this.httpClient.get(environment.API_URL);
  } 

  getOverview(){
    return  this.httpClient.get(environment.API_URL_OVERVIEW);
  } 

  getLinkAll(){
    return  this.httpClient.get(environment.ALL_LINK);
  } 

  getOfficeAll(){
    return  this.httpClient.get(environment.ALL_OFFICE);
  } 

  getStationAll(){
    return  this.httpClient.get(environment.ALL_STATION);
  } 

  getProvinceAll(){
    return  this.httpClient.get(environment.ALL_PROVINCE);
  } 

  getRiverAll(){
    return  this.httpClient.get(environment.ALL_RIVER);
  } 
  

  getOffice(id){
    return  this.httpClient.get(environment.API_OFFICE+"/"+id);
  } 

  getProvince(id){
    return  this.httpClient.get(environment.API_PROVINCE+"/"+id);
  } 

  getRiver(id){
    return  this.httpClient.get(environment.API_RIVER+"/"+id);
  }


  getRecord(station_id,start_date,end_date){

    let params = new HttpParams();
    params = params.append('station_id', station_id);
    params = params.append('start_date', start_date.year+"-"+start_date.month+"-"+start_date.day);
    params = params.append('end_date', end_date.year+"-"+end_date.month+"-"+end_date.day);

    return  this.httpClient.get(environment.RECORD, { params: params });
  } 

}
