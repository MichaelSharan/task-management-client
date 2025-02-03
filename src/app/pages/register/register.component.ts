import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule]
})
export class RegisterComponent {
  user = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.user).subscribe({
      next: (response) => {
        console.log('Регистрация успешна!', response);
        this.router.navigate(['/login']);
      },
      error: (error) => console.error('Ошибка регистрации', error)
    });
  }
}
