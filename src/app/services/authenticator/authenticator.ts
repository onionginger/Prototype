import { Service } from '@angular/core';
import { CanActivateChildFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

@Service()

export class AuthenticationService {

    public isLoggedIn(): boolean {
        const pass = localStorage.getItem('password');
        const email = localStorage.getItem('email');

        return pass && email;
    }

}


