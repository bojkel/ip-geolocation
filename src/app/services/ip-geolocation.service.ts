import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IpGeolocationUrl } from '../utils/api/api';
import {Geolocation} from "../models/geolocation.model";

@Injectable({
  providedIn: 'root'
})
export class IpGeolocationService {

  constructor(private httpClient: HttpClient) { }

  public getIpGeolocation(IP: string | null): Observable<Geolocation> {
    return this.httpClient.get<any>(IpGeolocationUrl(IP));
  }
  
}
