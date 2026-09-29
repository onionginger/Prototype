import { Service } from '@angular/core';
import { CanActivateChildFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

@Service()

export class AuthenticationService {
    isLoggedIn = false;
}


