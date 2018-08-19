import { Inject, Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class NoAuthGuard implements CanActivate {
    constructor(
        @Inject('DataService') public ds: DataService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;
        if (!this.ds.isLoggedIn()) { return true; }

        this.router.navigate(['/account']);
        return false;
    }
}
