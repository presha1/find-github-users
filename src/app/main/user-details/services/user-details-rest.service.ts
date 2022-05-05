import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Organization, Repository, UserDetailsBasicInfo} from '../../model/user-details.model';
import {takeLast} from 'rxjs/operators';

const headers = new HttpHeaders({
  Authorization: `token ${environment.token}`
});

@Injectable({
  providedIn: 'root'
})
export class UserDetailsRestService {

  private readonly USER_DERAILS_REST_URL = `${environment.restApiBaseUrl}users`;

  constructor(private http: HttpClient) { }

  getUserDetails(userId: string): Observable<UserDetailsBasicInfo> {
    return this.http.get<any>(`${this.USER_DERAILS_REST_URL}/${userId}`, {headers});
  }

  getOrganizationalInfo(url: string): Observable<Organization[]>{
    return this.http.get<Organization[]>(url, {headers})
      .pipe(
        takeLast(10)
      );
  }

  getReposForUser(url: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(url, {headers});
  }
}
