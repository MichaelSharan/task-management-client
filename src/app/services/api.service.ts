import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TestResult } from '../models/test.result.model';

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
    this.http.post(this.apiUrl, {input: number}).subscribe({
      next: () => this.router.navigate(['/tests']),
      error: err => 'Ошибка при создании теста: ' + (err.error?.message || err.statusText)
    });
  }
}
