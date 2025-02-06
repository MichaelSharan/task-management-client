import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '/api'

  constructor(private http: HttpClient, private router: Router) {}
  
  getTestResults() {
    return this.http.get(`${this.apiUrl}/test-results`);
  }

  makeTestResult(number: number){
    this.http.post('http://localhost:5000/api/testresults', {input: number}).subscribe({
      next: () => this.router.navigate(['/tests']),
      error: err => 'Ошибка при создании теста: ' + (err.error?.message || err.statusText)
    });
  }
}
