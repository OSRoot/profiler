import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private BASEAPI = environment.baseApi as string;

  constructor(
    private http: HttpClient
  ) {}



  getData(endPoint: string): Observable<any> {
    return this.http.get(this.BASEAPI + endPoint).pipe(take(1));
  }

  postData(endPoing: string, body: any): Observable<any> {
    return this.http.post(this.BASEAPI + endPoing, body).pipe(take(1));
  }

  updateData(endPoing: string, body: any): Observable<any> {
    return this.http.put(this.BASEAPI + endPoing, body).pipe(take(1));
  }

  deleteData(endPoing: string): Observable<any> {
    return this.http.delete(this.BASEAPI + endPoing).pipe(take(1));
  }

  get baseApi(): string {
    return this.BASEAPI;
  }
}
// use this in search
// getEndpoint() {
//   let endPoint = `/students?=${this.skip}`;
//   if(this.searchText.trim() != '') endPoint +=`&name=${this.searchText}`;
//   if(this.teacher) endPoint += `&teacher=${this.teacher}`
//   return endPoint;
// }
