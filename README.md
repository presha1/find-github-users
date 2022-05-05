# AngularFrameworkProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

# Pre-requisite
1. Install all the dependencies with: `npm install`
2. Starting application: `npm start` or `ng serve`
3. You can run the application in http://localhost:4200/ by default. And search for users in github with username.

# Note
Be default github api allows 60 calls per hour based on IP address. Check [link](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting) for further information.

# Setup token for git
If you need extra rate limit for github api, then you need to setup configuration. Steps to follow:
1. Add token in the environment variable `token` in file environment.ts.
2. Uncomment the line 10 in `user-details-rest.service.ts` to add authorization token in header.
