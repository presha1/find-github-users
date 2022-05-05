import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Organization, Repository} from '../model/user-details.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {UserDetailsRestService} from './services/user-details-rest.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  unsubscribe = new Subject();
  data: any;
  organizationalList: Organization[] = [];
  repoList: Repository[] = [];
  stars = 0;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly restService: UserDetailsRestService) { }

  ngOnInit(): void {

    this.data = this.route.snapshot.data.data;
    this.restService.getOrganizationalInfo(this.data.organizations_url)
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(organizationList => {
        this.organizationalList = organizationList.slice(0, 10);
      });

    this.restService.getReposForUser(this.data.repos_url)
      .pipe(
        takeUntil(this.unsubscribe)
      )
      .subscribe(repoList => {
        this.repoList = repoList;
        repoList.forEach(repo => {
          // count the star for user based on stargazers_count for each repo for user
          this.stars = this.stars + repo.stargazers_count;
        });
        // get top 6 repos and sort according to push_at
        this.repoList = this.getTopNRepositories(this.repoList, 6);
        this.sortOnBasisOfPushedAt(this.repoList);
      });
  }

  gotoSearchPage(): void {
    this.router.navigate(['/user']);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.unsubscribe();
  }

  private sortOnBasisOfPushedAt(repoToSort: Repository[]): void {
    if (repoToSort.length > 0) {
      repoToSort.sort((repo1, repo2) => {
        const time1 = new Date(repo1.pushed_at);
        const time2 = new Date(repo2.pushed_at);
        return time2.valueOf() - time1.valueOf();
      });
    }
  }

  private getTopNRepositories(repoToSort: Repository[], numberOfValue: number): Repository[] {
    if (repoToSort.length > 0) {
      repoToSort.sort((repo1, repo2) => {
        return repo2.stargazers_count - repo1.stargazers_count;
      });
    }
    return repoToSort.slice(0, numberOfValue);
  }

}
