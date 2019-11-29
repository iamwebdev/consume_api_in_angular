import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  readonly apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodoList() {
    return this.http.get(this.apiUrl)
  }
  
}
