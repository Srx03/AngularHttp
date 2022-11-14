import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularHttp';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.getUsers();
      this.getUser();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("done getting user"),
    );

  }

  getUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
      () => console.log("done getting user"),
    );

  }


}
