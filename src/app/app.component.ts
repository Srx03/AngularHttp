import { Component, OnInit } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularHttp';

  private user: any = {
    'id': 5,
    'name': 'Srdjan Djuric',
    'username': 'Srx',
    'email': 'srx@gmail.com',
    
    };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.patchUser();
      this.getUsers();
      // this.getUser();
      // this.addUser();
      // this.updateUser();
    

  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('succesfully fetched users'),
    );

  }

  getUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('succesfully fetched user'),
    );

  };

  addUser(): void {
    this.userService.addUser(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('succesfully added user'),
    );

  }

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('succesfully updated user'),
    );

  }

  patchUser(): void {
    this.userService.patchUser(this.user).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log('succesfully patched user'),
    );

  }



}
