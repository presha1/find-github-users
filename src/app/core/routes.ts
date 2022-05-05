import {UserSearchComponent} from '../main/user-search/user-search.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserDetailsComponent} from '../main/user-details/user-details.component';
import {UserDetailsResolver} from '../main/user-details/services/resolvers/user-details.resolver';

export const routes = [
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'},
  {
    path: 'user',
    component: UserSearchComponent
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
    resolve: {data: UserDetailsResolver}
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
