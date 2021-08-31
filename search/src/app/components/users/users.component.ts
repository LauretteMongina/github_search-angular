import { Component, OnInit } from '@angular/core';
import { UserService } from '../../usertwo.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  repo: any;
  user: any;
    constructor(public myService: UserService) { }

  getUsers(userName) {
    this.myService.getUsers(userName).then(
      (success) => {
        this.user = this.myService.user;
      },
      (error)=>{
        console.log(error)
      }
    )
      this.myService.getRepo(userName).then(
        (success)=>{
          this.repo =this.myService.repo;
          console.log(this.repo);
        },
        (error)=>{
          console.log(error);
        }
      )
  }

  ngOnInit(): void {
    this.getUsers("laurettemongina");
  }
}
