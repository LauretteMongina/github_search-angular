export class Repo {
  constructor(
    public html_url: string,
        public name: string,
        public repos_url: string,
        public description: string,
        public forks_count: number,
        public created_at: Date,
    ){

  }
}
