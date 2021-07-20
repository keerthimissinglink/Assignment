import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class apiService{
    constructor(private httpClient:HttpClient){}
    getState(): Observable<any> {
       return this.httpClient.get("https://api.covid19india.org/data.json");
    }
    getDistricts(): Observable<any>{
        return this.httpClient.get("https://api.covid19india.org/state_district_wise.json");
    }
}