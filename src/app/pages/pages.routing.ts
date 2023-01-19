import { Routes } from '@angular/router';
import { loginComponent } from './login/login.component';
import { PagesComponent } from './pages.component';
import { DynamicDashboardComponent } from './dynamic-dashboard/dynamic-dashboard.component';

export const PagesRoutes: Routes = [ 
    {
        path: '',
        component: loginComponent
    },
    {
        path: 'login',
        component: loginComponent
    },
    {
        path: 'pages',
        component: PagesComponent
    },
    {
        path: 'pages/dynamic-dashboard',
        component: DynamicDashboardComponent
    },
    // {
    //     path: 'pages', component: PagesComponent,
    //     children: [
    //         // { path: '', redirectTo: 'dynamic-dashboard',pathMatch: 'full' },
    //         {
    //             path: 'dynamic-dashboard',
    //             loadChildren: () => import('./dynamic-dashboard/dynamic-dashboard.module').then(m => m.DynamicDashboardModule)
    //         }
    //     ]
    // }
];