import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private domainApi = environment.domainApi + 'base/';
  constructor(private http: HttpClient) {}

  getData(): Observable<string> {
    return this.http.get<string>(this.domainApi + 'data');
  }
}
