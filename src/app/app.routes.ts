import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { Errorpage } from './components/errorpage/errorpage';
import { Chat } from './components/chat/chat';
import { RedirectCommand } from '@angular/router';
import { AuthenticationService } from './services/authenticator/authenticator';
import { Router } from 'express';
import { inject } from '@angular/core';
import { CanActivateChildFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

let dummydata = [
  {name:"batman", email:"bruce@waynemansion.gt", password:"imasadorphan"}
]



// export const authGuard = () => {
//   if (LoggedIn) return true;
//   const router = inject(Router);
//   return router.createUrlTree(['/']);
// };


// export const adminChildGuard: CanActivateChildFn = (
//   childRoute: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot,
// ) => {
//   const authService = inject(AuthenticationService);
//   return authService.hasRole('admin');
// };



//  const router = inject(Router);
//       const authService = inject(AuthenticationService);
//       if (!authService.isLoggedIn()) {
//         const loginPath = router.parseUrl("/login");
//         return new RedirectCommand(loginPath, {
//           skipLocationChange: true,
//         })
//       }

export const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
  },

  {path: 'login', 
  component: Login},
  
  {path: 'chat',
    component: Chat,
    // canActivate: [authGuard],
  },

  {
    path:'edit',
    component: Profile,
  },
  {path:'',redirectTo:'login', pathMatch: 'full' },

  {
    path: 'ComponentNotFound',
    component: Errorpage
  },
  {
    path: '**',
    redirectTo:'componentNotFound'
  }


];
let Users = [
  {
    "name": "shigeo", "email":"kageyama@saltmiddleschool.jp", "password":"mobpsycho"
  },
  {
    "name": "reigen", "email":"arataka@sorcery.jp", "password":"conartist"
  },
  {
    "name": "saitama", "email":"saitama@hero.jp", "password":"onepunchman"
  }
]