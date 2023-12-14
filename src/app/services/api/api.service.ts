import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bike } from '../../component/bikemodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //post method
  addbike(data: bike) {
    return this.http.post<bike>("http://localhost:3000/posts",data);
  }

  //get method
  getbike() {
    return this.http.get<bike[]>("http://localhost:3000/posts");
  }

  //delete
  deletebike(id: number) {
    return this.http.delete<bike>("http://localhost:3000/posts/" + id);
  }

  //fetching data on edit
  fetchdata(id: number) {
    return this.http.get<bike>("http://localhost:3000/posts/" + id);
  }

  updatebike(data: bike, id: number) {
    return this.http.put<bike>("http://localhost:3000/posts/" + id, data);
  }
}
