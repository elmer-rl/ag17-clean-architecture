import { Routes } from '@angular/router';

export const routes: Routes = [
  {
      path: '',
      loadComponent: ()=> import('./components/external/external.component'),
      children: [
        {
            path: 'login', loadComponent: ()=> import('./components/external/user-login/user-login.component')
        },
        {
          path: 'register', loadComponent: ()=> import('./components/external/user-register/user-register.component')
        },
        {
          path:'', redirectTo: 'login', pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    loadComponent: ()=> import('./components/internal/internal.component'),
    children: [
      {
        path: 'profile', loadComponent: ()=> import('./components/internal/user-profile/user-profile.component')
      }
    ]
  },
  {
    path:'', redirectTo: 'register', pathMatch: 'full'
  }
];
