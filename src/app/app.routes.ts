import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { sessionGuard } from './guards/session/session.guard';
import { ProfileComponent } from './profile/profile.component';
import { TransactionsComponent } from './transactions/transactions.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [sessionGuard],
        title: 'Home page'
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [sessionGuard],
        title: 'Profile page'
    },
    {
        path: 'transactions',
        component: TransactionsComponent,
        canActivate: [sessionGuard],
        title: 'Transactions page'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: "Login page"
    },
    {
        path: 'signup',
        component: SignupComponent,
        title: "Sign Up page"
    }
];
