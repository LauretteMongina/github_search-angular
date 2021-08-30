import { Injectable } from '@angular/core';
import { User } from './components/user';
import { Repo } from './components/repo'
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  repo: Repo;


  constructor(private http: HttpClient) {
    this.user = new User("","","","","","","","",new Date);
    this.repo = new Repo("","","","",0,new Date)
   }
   getUsers(userName: string) {
   
    interface ApiResponse {
      public_repos: string;
      login: string;
      html_url: string;
      name: string;
      avatar_url: string;
      followers: string;
      following: string;
      repos_url: string;
      created_at: Date;
    }
    let promise = new Promise<void>((resolve, reject) => {
      let apiURL ='https://api.github.com/users/' +userName+ '?access_token=' +environment.token;
      this.http .get<ApiResponse>(apiURL) .toPromise()
       .then((result) => {
        this.user = result;
    resolve();
        },
        (error) => {
          reject();
        }
      );
    });
    return promise;
  }
  getRepo(userName:string){
    interface ApiResponse{
      html_url: string;
      name: string;
      repos_url: string;
      description: string;
      forks_count: number;
      created_at:Date
    }
    let promise = new Promise<void>((resolve, reject) => {
      let apiURL ='https://api.github.com/users/' + userName +
       '/repos?access_token=' +environment.token;
      this.http
       .get<ApiResponse>(apiURL)
       .toPromise()
       .then(
         (result)=>{
        this.repo = result;
          resolve();
        },
        (error) => {
          reject();
        }
      );
    });
    return promise;
  }
}

