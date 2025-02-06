import { Component } from '@angular/core';
import { TestResult } from '../../models/test.result.model';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-test-results',
  imports: [RouterLink, NgFor],
  templateUrl: './test-results.component.html',
  styleUrl: './test-results.component.css'
})
export class TestResultsComponent {
  testResults: TestResult[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTestResults();
  }

  loadTestResults(): void {
    this.apiService.getTestResults().subscribe(
      (data) => {
        this.testResults = data;
      },
      (error) => {
        console.error('Ошибка загрузки данных:', error);
      }
    );
  }

  delete(id: string){
    this.apiService.deleteTest(id).subscribe(() => this.loadTestResults())
  }
}
