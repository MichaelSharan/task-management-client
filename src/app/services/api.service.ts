import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TestResult } from '../models/test.result.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api/testresults'

  constructor(private http: HttpClient, private router: Router) {}
  
  getTestResults() {
    return this.http.get<TestResult[]>(this.apiUrl);
  }

  makeTestResult(number: number){
    return this.http.post<TestResult>(this.apiUrl, {input: number})
  }

  deleteTest(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

  getTestResultById(id: string) {
    return this.http.get<TestResult>(`${this.apiUrl}/${id}`);
  }

  updateTest(id: string, testResult: TestResult) {
    return this.http.put<TestResult>(`${this.apiUrl}/${id}`, testResult);
  }
}
