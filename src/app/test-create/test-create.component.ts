import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-test-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent {
  testForm: FormGroup;
  errorMessage: string = '';
  result?: string;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private apiService: ApiService) {
    this.testForm = this.fb.group({
      input: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  submitForm() {
    if (this.testForm.invalid) {
      return;
    }

    const testData = { input: this.testForm.value.input };

    this.apiService.makeTestResult(testData.input).subscribe({
      next: (res) => this.result = res.output,
      error: err => 'Ошибка при создании теста: ' + (err.error?.message || err.statusText)
    });
  }
}
