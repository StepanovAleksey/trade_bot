import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import {IHistoryBarDataModel} from '../../../shared/history-data.model'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private domainApi = environment.domainApi + 'base/';
  constructor(private http: HttpClient) {}

  getData(): Observable<IHistoryBarDataModel[]> {
    return this.http.get<IHistoryBarDataModel[]>(this.domainApi + 'data');
  }
}
