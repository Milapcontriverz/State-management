import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private http: HttpClient) {}

  getSpaceXData() {
    return this.http.get('https://api.spacexdata.com/v3/info');
  }
}