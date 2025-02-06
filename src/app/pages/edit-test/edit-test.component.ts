import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestResult } from '../../models/test.result.model';
import { ApiService } from '../../services/api.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-test',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {
  testResult: TestResult | null = null;
  testId!: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.testId = this.route.snapshot.paramMap.get('id')!;
    this.loadTest();
  }

  loadTest(): void {
    this.apiService.getTestResultById(this.testId).subscribe({
      next: (test) => (this.testResult = test),
      error: (err) => console.error('Ошибка загрузки теста', err),
    });
  }

  updateTest(): void {
    if (this.testResult) {
      this.apiService.updateTest(this.testId, this.testResult).subscribe({
        next: () => this.router.navigate(['/test-results']),
        error: (err) => console.error('Ошибка обновления', err),
      });
    }
  }
}
