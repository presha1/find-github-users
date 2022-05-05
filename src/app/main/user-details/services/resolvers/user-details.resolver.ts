import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserDetailsRestService} from '../user-details-rest.service';
import {UserDetailsBasicInfo} from '../../../model/user-details.model';
import {catchError, map} from 'rxjs/operators';
import {error} from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolver implements Resolve<UserDetailsBasicInfo|{error: any}> {
  constructor(private userDetailsRestService: UserDetailsRestService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserDetailsBasicInfo|{error: any}> {
    const id = route.paramMap.get('id');
    return this.userDetailsRestService.getUserDetails(id).pipe(
      map(res => res),
      // tslint:disable-next-line:no-shadowed-variable
      catchError(error => {
        return of({ error });
      })
    );
    // return of('data for ' + route.paramMap.get('id') + ' test12343');
  }
}
