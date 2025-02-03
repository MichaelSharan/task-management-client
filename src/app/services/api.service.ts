import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api'

  constructor(private http: HttpClient) {}
  
  getTestResults() {
    return this.http.get(`${this.apiUrl}/test-results`);
  }
}
