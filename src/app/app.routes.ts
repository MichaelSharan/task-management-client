import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TestResultsComponent } from './pages/test-results/test-results.component';
import { authGuard } from './guards/auth.guard';
import { TestCreateComponent } from './test-create/test-create.component';
import { adminGuard } from './guards/admin.guard';
import { EditTestComponent } from './pages/edit-test/edit-test.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'test-results', component: TestResultsComponent, canActivate: [authGuard, adminGuard] },
    { path: 'create-test', component: TestCreateComponent, canActivate: [authGuard] },
    { path: 'edit-test/:id', component: EditTestComponent },
  ];
