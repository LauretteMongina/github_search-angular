export class User {
  static result: any;
  constructor(
    public public_repos: string,
    public login: string,
    public html_url: string,
    public name: string,
    public avatar_url: string,
    public followers: number,
    public following: number,
    public repos_url: string,
    public created_at: Date,
  ){

  }
}
