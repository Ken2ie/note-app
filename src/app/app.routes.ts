import { Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { SignupComponent } from './core/signup/signup.component';
import { MainComponent } from './features/dashboard/main/main.component';

export const routes: Routes = [

    {
        path: "",
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'dashboard',
        component: MainComponent,
        loadChildren: () => import('./routes/dashboard.routes').then((m) => m.routes)
    }
];
