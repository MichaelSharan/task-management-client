import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { Role } from './models/auth.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [NgIf, RouterOutlet, RouterLink],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  get isAdmin(){
    return this.userRole === 'Admin'
  }

  private get userRole(): Role{
    return localStorage.getItem('userRole') as Role
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  log(message: string){
    console.log(message)
  }
}
