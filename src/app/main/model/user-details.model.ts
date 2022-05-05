export interface UserDetailsBasicInfo {
  avatar_url?: string;
  name: string;
  id: string;
  followers: number;
  following: number;
  numberOfStars: string; // ?
  twitter_username: string;
  organizations_url: string; // to be extracted from organizations_url
  repos_url: string;
}

export interface Organization {
  login: string;
  avatar_url: string;
}

// how to determine top 6 repos
export interface Repository {
  name: string;
  html_url: string;
  description: string;
  language: string; // to be extracted from languages_url (probably multiple language present) or available in language
  start_count: string; // ??
  forks: number;
  pushed_at: Date;
  stargazers_count: number;
}
